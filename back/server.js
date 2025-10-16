import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import cron from "node-cron";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.set("trust proxy", true); // utile si reverse proxy / hébergement NAS

// — CORS (optionnel : restreins à ton domaine front)
app.use(cors({
  origin: (origin, cb) => cb(null, true), // ou ['https://ton-domaine.fr']
  methods: ["POST", "OPTIONS"],
}));
app.use(express.json({ limit: "200kb" }));

// — Rate limit (anti spam burst)
app.use("/api/send-mail", rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
}));

// — Transport mail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
});

// (optionnel) vérifier la connexion au démarrage
transporter.verify().then(()=>console.log("SMTP ok")).catch(console.error);

// — Helpers
const isEmail = (v="") => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const stripHtml = (s="") => s.replace(/<[^>]*>/g, "");

// — Endpoint contact
app.post("/api/send-mail", async (req, res) => {
  const { name = "", email = "", subject = "", message = "", honeypot = "" } = req.body || {};

  // Honeypot
  if (honeypot && honeypot.trim() !== "") {
    return res.status(400).json({ ok: false, error: "bot_detected" });
  }

  // Validations
  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ ok: false, error: "missing_fields" });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }
  if (message.length > 5000) {
    return res.status(400).json({ ok: false, error: "message_too_long" });
  }

  // Nettoyage minimal
  const cleanMessage = stripHtml(message).trim();
  const finalSub = `MAILJOB=${subject?.trim() || ""}`.slice(0, 200); // limite le sujet

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`, // meilleur pour SPF/DMARC
      replyTo: `"${name.trim()}" <${email.trim()}>`,           // répondra au visiteur
      to: process.env.MAIL_USER,
      subject: finalSub,
      text: [
        `Nom: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Sujet: ${subject.trim() || "(vide)"}`,
        "",
        cleanMessage,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({ ok: false, error: "mail_failed" });
  }
});

// === 2. Tracking des visites ===

// === Paths robustes + dossier data ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, "data");
fs.mkdirSync(DATA_DIR, { recursive: true });

const LOG_FILE = path.join(DATA_DIR, "visits.json");
const VISITORS_FILE = path.join(DATA_DIR, "visitors.json");

// === I/O sûres ===
function safeReadJSON(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    const txt = fs.readFileSync(file, "utf8");
    return txt?.trim() ? JSON.parse(txt) : fallback;
  } catch (e) {
    console.error("READ JSON ERROR:", file, e.message);
    return fallback;
  }
}
function safeWriteJSON(file, obj) {
  try {
    fs.writeFileSync(file, JSON.stringify(obj, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error("WRITE JSON ERROR:", file, e.message);
    return false;
  }
}

function loadVisits()      { return safeReadJSON(LOG_FILE, []); }
function saveVisits(data)  { return safeWriteJSON(LOG_FILE, data); }
function loadVisitors()    { return safeReadJSON(VISITORS_FILE, []); }
function saveVisitors(arr) {
  const dedupedSorted = Array.from(new Set(arr)).sort((a,b)=>a.localeCompare(b));
  return safeWriteJSON(VISITORS_FILE, dedupedSorted);
}

// === Track visit (sauvegarde AVANT l'e-mail) ===
app.post("/api/track-visit", async (req, res) => {
  const ip = req.ip || req.connection?.remoteAddress || "unknown";
  const ua = (req.get("User-Agent") || "").replace(/\s+/g, " ").trim();
  const referer = req.get("Referer") || req.body?.referer || "";
  const pathVisited = req.body?.path || "";
  const now = new Date().toISOString();

  const visits = loadVisits();
  visits.push({ ip, path: pathVisited, referer, ua, date: now });
  saveVisits(visits);

  if (ua) {
    const visitors = loadVisitors();
    let isNew = false;
    if (!visitors.includes(ua)) {
      visitors.push(ua);
      saveVisitors(visitors);           // <-- persiste quoi qu'il arrive
      isNew = true;
    }

    if (isNew) {
      // e-mail informatif (ne bloque PAS la persistance)
      try {
        await transporter.sendMail({
          from: `"Sevrard.fr Tracker" <${process.env.MAIL_USER}>`,
          to: process.env.MAIL_USER,
          subject: `🎉 Nouveau visiteur #${visitors.length}`,
          text: `Un nouveau visiteur unique vient d'arriver.\n\nUser-Agent:\n${ua}`
        });
        console.log("✅ Mail nouveau visiteur envoyé");
      } catch (err) {
        console.error("❌ Erreur envoi mail (visiteur) :", err.message);
      }
    }
  }

  res.json({ ok: true });
});

// === CRON: quotidien 09:00 (et pas chaque heure) ===
cron.schedule("0 9 * * *", async () => {
  const visits = loadVisits();
  if (!visits.length) return;

  let text = "Rapport des visites :\n\n";
  for (const v of visits) {
    text += `IP: ${v.ip}\nDate: ${v.date}\nPath: ${v.path}\nReferer: ${v.referer}\nUA: ${v.ua}\n---\n`;
  }

  try {
    await transporter.sendMail({
      from: `"Site Tracker" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `Rapport visites (${visits.length})`,
      text,
    });
    saveVisits([]); // on vide après envoi
    console.log("✅ Rapport visites envoyé & reset");
  } catch (err) {
    console.error("❌ Erreur envoi rapport :", err.message);
  }
});

app.listen(3000, "127.0.0.1", () =>
  console.log("✅ Backend prêt sur http://127.0.0.1:3000")
);
