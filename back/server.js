import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import cron from "node-cron";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.set("trust proxy", true); // utile si reverse proxy / hébergement NAS

// === Config transport mail (réutilisée partout) ===
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// === 1. Ton endpoint existant de contact ===
app.post("/api/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;
  let finalSub = subject === "" ? "MAILJOB=" : "MAILJOB=" + subject;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: finalSub,
      text: message,
    });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// === 2. Tracking des visites ===

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOG_FILE = path.join(__dirname, "visits.json");     
const VISITOR_FILE = path.join(__dirname, "visitor.json"); 

function loadVisits() {
  if (!fs.existsSync(LOG_FILE)) return [];
  return JSON.parse(fs.readFileSync(LOG_FILE, "utf8") || "[]");
}
function saveVisits(data) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(data, null, 2), "utf8");
}

function loadVisitors() {
  if (!fs.existsSync(VISITOR_FILE)) return [];
  return JSON.parse(fs.readFileSync(VISITOR_FILE, "utf8") || "[]");
}
function saveVisitors(list) {
  // on trie pour éviter les diffs inutiles entre commits/versions
  const dedupedSorted = Array.from(new Set(list)).sort((a, b) =>
    a.localeCompare(b)
  );
  fs.writeFileSync(VISITOR_FILE, JSON.stringify(dedupedSorted, null, 2), "utf8");
}

app.post("/api/track-visit", async (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  const ua = req.get("User-Agent") || "";
  const referer = req.get("Referer") || req.body.referer || "";
  const pathVisited = req.body.path || "";
  const now = new Date().toISOString();

  const visits = loadVisits();
  visits.push({ ip, path: pathVisited, referer, ua, date: now });
  saveVisits(visits);

  const uaNorm = ua.replace(/\s+/g, " ").trim();

  if (uaNorm) {
    const visitors = loadVisitors();
    if (!visitors.includes(uaNorm)) {

      // MAIL nouveau visiteur
      try {
        await transporter.sendMail({
          from: `"Sevrard.fr Tracker" <${process.env.MAIL_USER}>`,
          to: process.env.MAIL_USER,
          subject: `🎉 Nouveau visiteur #${visitors.length + 1}`,
          text: `Un nouveau visiteur unique vient d'arriver.\n\nUser-Agent:\n${uaNorm}`
        });

        visitors.push(uaNorm);
        saveVisitors(visitors);
        console.log("✅ Mail nouveau visiteur envoyé");
      } catch (err) {
        console.error("❌ Erreur envoi mail :", err);
      }
    }
  }
  res.json({ ok: true });
});

// === 3. CRON : envoi rapport journalier à 9h ===
cron.schedule("0 * * * *", async () => {
  const visits = loadVisits();
  if (visits.length === 0) return;

  let text = "Rapport des visites :\n\n";
  visits.forEach((v) => {
    text += `IP: ${v.ip}\nDate: ${v.date}\nPath: ${v.path}\nReferer: ${v.referer}\nUA: ${v.ua}\n---\n`;
  });

  try {
    await transporter.sendMail({
      from: `"Site Tracker" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `Rapport visites (${visits.length})`,
      text,
    });

    // vider après envoi
    saveVisits([]);
    console.log("✅ Rapport visites envoyé");
  } catch (err) {
    console.error("❌ Erreur envoi rapport :", err);
  }
});

app.listen(3000, "127.0.0.1", () =>
  console.log("✅ Backend prêt sur http://127.0.0.1:3000")
);
