import "./assets/main.css";
import { createI18n } from 'vue-i18n';
import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";


const API_BASE = import.meta.env.VITE_API_BASE;

router.afterEach((to) => {
  fetch(`${API_BASE}/api/track-visit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: to.fullPath, referer: document.referrer || "" }),
  }).catch(() => {});
});

const messages = {
    en: {
        clickToNext: 'Click to my skills',
        autoHeberge: 'Self-hosted website on Synology NAS (Vue.js/Express)',
        hello: 'Hi.',
        aboutMe: 'Some words about me..',
        shortDescription : "My name is Stéphane, I’m 34 years old and I live in France. I’m a full stack developer with over 10 years of experience. In my last experience at Kiliba, I worked on a React/Vite.js architecture for the front end, and Node.js/Express/MongoDB for the back end. I’m used to working in start-up environments, applying the Scrum methodology to manage projects in an agile and iterative way.",
        cvText: "I am currently looking for a new long-term opportunity <span class='red-text'>( </span>either hybrid or fully remote<span class='red-text'> )</span> . If you are seeking a passionate developer who can quickly adapt to new technologies and contribute effectively to your projects, feel free to download my CV and get in touch to discuss further.",
        dlCustomCv : "Dowload my custom CV",
        dlEuroCv : "Download my Europass CV",

        menuHome : "Home",
        menuAbout : "About me",
        menuExperience : "Experience",

        aboutShort : "I am a developer passionate about technology, curious about both software and hardware. Always enthusiastic to learn and explore, I fully dedicate myself to my work with cheerfulness and commitment. I place great value on teamwork and collaboration, which I always prioritize over individualism.",
        aboutTitle : "<h2>About <span>Me</span></h2>",
        aboutTitle2: "<h3>What <span>I do</span></h3>",
        aboutSkill1 : "E-commerce",
        aboutSkillShort1 : "Managing an online store of 3D-printed objects",
        aboutSkill2 : "Web Development",
        aboutSkillShort2 : "Building modern web applications, from design to deployment",
        aboutSkill3 : "3D Printing",
        aboutSkillShort3 : "Designing and creating customized objects using 3D printing",
        aboutSkill4 : "Arduino/Raspberry",
        aboutSkillShort4 : "Prototyping and DIY projects combining electronics and programming",
        
        education1 : "Scientific Baccalaureate",
        education1Text : "General science-oriented diploma emphasizing rigor, logic, and analytical reasoning skills",
        education2 : "Bachelor’s Degree in Computer Science",
        education2Text : "Training in programming, algorithms, and computer systems, developing analytical and problem-solving abilities",

        exp1Period : "October 2024 - Present",
        exp1 : "Freelance - E-commerce",
        exp1Text : "",
        exp2Period : "",
        exp2 : "Full-Stack Developer",
        exp2Text : "Participation in the development of an automated marketing solution based on artificial intelligence and supervised learning algorithms.",
        exp3Period : "",
        exp3 : "Freelance Developer",
        exp3Text : "Assisted clients in creating SaaS tools and customized e-commerce solutions (Shopify modules, showcase websites, automations)",
        exp4Period : "",
        exp4 : "Enterprise Software Developer",
        exp4Text : "Contributed to business process digitalization through the development of a complete ERP system (operations, fleet management, accounting)",
        exp5Period : "",
        exp5 : "Full-Stack Developer",
        exp5Text : "Developed intuitive touchscreen kiosks to enhance visitor experiences, including software development and on-site hardware installation",
        exp6Period : "",
        exp6 : "Project Manager",
        exp6Text : "Managed custom ERP development projects, designed e-commerce and showcase websites, and implemented accounting automation and connected tools",
        exp7Period : "",
        exp7 : "Web Developer",
        exp7Text : "Created tailored web interfaces, integrated design mockups, and optimized UX/UI for our web platform",

        contactFreelance : "Available for freelance",
        contactHelp : "How can I <span> help you? </span>",
        contactName: "Name",
        contactEmail: "Email address",
        contactSujet: "Subject",
        contactSendMessage: "Send",
      },
    fr: {
        clickToNext: 'Voir mon profil',
        autoHeberge: 'Site auto-hébergé sur NAS Synology (Vue.js/Express)',
        hello: 'Bonjour.',
        aboutMe: 'Quelques mots de présentation..',
        shortDescription : "Je m’appelle Stéphane, j’ai 34 ans et je vis en France. Je suis développeur full stack avec plus de 10 ans d’expérience. Lors de ma dernière expérience, j’ai eu l'occasion de travailler sur une architecture React/Vite.js coté front, et Node.js/Express/MongoDB coté back. J’ai l’habitude de travailler en appliquant la méthode Scrum pour gérer les projets de manière agile et itérative.",
        cvText:"Je suis actuellement à la recherche d'une nouvelle aventure professionnelle long terme <span class='red-text'>( </span>hybride ou full remote<span class='red-text'> )</span> donc si vous êtes à la recherche d'un développeur passionné, capable de s'adapter rapidement à de nouvelles technologies et de contribuer efficacement à vos projets, n'hésitez pas à télécharger mon CV et à me contacter pour en discuter davantage.",
        dlCustomCv : "Telecharger le CV perso",
        dlEuroCv : "Telecharger le CV Europass",

        menuHome : "Accueil",
        menuAbout : "A propos",
        menuExperience : "Expériences",

        aboutShort : "Je suis un développeur passionné de technologie, curieux aussi bien du software que du hardware. Toujours enthousiaste à l’idée d’apprendre et de découvrir, je m’investis pleinement dans mon travail avec jovialité et dévouement. J’accorde une importance particulière à l’esprit d’équipe et à la coopération, que je privilégie toujours à l’individualisme.",
        aboutTitle : "<h2>A <span>propos</span></h2>",
        aboutTitle2: "<h3>Mes <span>Activités</span></h3>",
        aboutSkill1 : "E-commerce",
        aboutSkillShort1 : "Création et gestion d’une boutique en ligne d’objets imprimés en 3D",
        aboutSkill2 : "Web développement",
        aboutSkillShort2 : "Création d’applications web modernes, de la conception au déploiement",
        aboutSkill3 : "3D printing",
        aboutSkillShort3 : "Conception et fabrication d’objets personnalisés grâce à l’impression 3D",
        aboutSkill4 : "Arduino/Raspberry",
        aboutSkillShort4 : "Prototypage et projets DIY mêlant électronique et programmation",

        education1 : "Bac scientifique",
        education1Text : "Diplôme général orienté sciences, développant rigueur, logique et capacités de raisonnement.",
        education2 : "License Informatique",
        education2Text : "Formation en programmation, algorithmique et systèmes informatiques, développant des compétences en analyse et résolution de problèmes.",

        exp1Period : "Octobre 2024 - Aujourd'hui",
        exp1 : "Freelance - E-commerce",
        exp1Text : "Autoformation AWS-Python / Gestion et création de boutique E-commerce : Conception de plan 3D et vente d'objet imprimé en 3D ",
        exp2Period : "",
        exp2 : "Dev full-stack",
        exp2Text : "Participation au développement d’une solution de marketing automatisé basée sur l’intelligence artificielle et des algorithmes d’apprentissage supervisé.",
        exp3Period : "",
        exp3 : "Dev freelance",
        exp3Text : "Accompagnement de clients dans la création d’outils SaaS et de solutions e-commerce personnalisées (Shopify, sites vitrines, automatisations)",
        exp4Period : "",
        exp4 : "Dev informatique d'entreprise",
        exp4Text : "Contribution à la digitalisation des processus via le développement d’un ERP complet (exploitation, garage, comptabilité).",
        exp5Period : "",
        exp5: "Dev full-stack",
        exp5Text : "Création de bornes tactiles muséologique (Grand Nausicaa) intuitives pour enrichir l’expérience des visiteurs, incluant développement logiciel et installation du matériel sur place",
        exp6Period : "",
        exp6: "Chef de projet / President Asso",
        exp6Text : "Gestion de projets de développement d’ERP sur mesure, conception de sites e-commerce et vitrines, mise en place d’automatisations comptables et outils connectés",
        exp7Period : "",
        exp7 : "Developpeur web",
        exp7Text : "Création d’interfaces web sur mesure, intégration de maquettes, optimisation UX/UI et de notre plateforme web",

        contactFreelance : "Disponible en freelance",
        contactHelp : "Comment puis je <span>vous aider ? </span>",
        contactName: "Nom",
        contactEmail: "Addresse email",
        contactSujet: "Sujet",
        contactSendMessage: "Envoyer",
      },
  };
  
  // Création d'une instance vue-i18n
  const i18n = createI18n({
    locale: 'fr', // langue par défaut
    messages, // Ajout des messages
  });
  

  const app = createApp(App);
  app.use(router).use(i18n).mount("#app");

