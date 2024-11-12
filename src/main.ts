import "./assets/main.css";
import { createI18n } from 'vue-i18n';
import { createApp } from "vue";
import App from "./App.vue";

// Messages de traduction
const messages = {
    en: {
        clickToNext: 'Click to my skills',
        hello: 'Hi.',
        aboutMe: 'Some word about me..',
        shortDescription : "Passionate about web development and new technologies, I have had the opportunity to work on projects using various technical environments, including Node.js, Angular, and React. Naturally self-taught, I quickly adapt to any tech stack, allowing me to be productive from the start of my assignments. My curiosity and eagerness to learn drive me to continuously improve my skills and stay at the forefront of the latest innovations.",
        cvText: "I am currently looking for a new long-term opportunity <span class='red-text'>( </span>either hybrid or fully remote<span class='red-text'> )</span> . If you are seeking a passionate developer who can quickly adapt to new technologies and contribute effectively to your projects, feel free to download my CV and get in touch to discuss further.",
        dlCustomCv : "Dowload my custom CV",
        dlEuroCv : "Download my Europass CV"
      },
    fr: {
        clickToNext: 'Voir mon profil',
        hello: 'Salut.',
        aboutMe: 'Quelques mots de présentation..',
        shortDescription : "Passionné par le développement web et les nouvelles technologies, j'ai eu l'opportunité de travailler sur des projets utilisant divers environnements techniques, notamment Node.js, Angular, et React. Autodidacte par nature, je m'adapte rapidement à chaque stack technique, ce qui me permet d'être productif dès le début de mes missions. Ma curiosité et mon envie d'apprendre me poussent à constamment améliorer mes compétences et à rester à la pointe des dernières innovations.",
        cvText:"Je suis actuellement à la recherche d'une nouvelle aventure professionnelle long terme <span class='red-text'>( </span>hybride ou full TT<span class='red-text'> )</span> . Si vous êtes à la recherche d'un développeur passionné, capable de s'adapter rapidement à de nouvelles technologies et de contribuer efficacement à vos projets, n'hésitez pas à télécharger mon CV et à me contacter pour en discuter davantage.",
        dlCustomCv : "Telecharger le CV perso",
        dlEuroCv : "Telecharger le CV Europass"
      },
  };
  
  // Création d'une instance vue-i18n
  const i18n = createI18n({
    locale: 'fr', // langue par défaut
    messages, // Ajout des messages
  });
  

  const app = createApp(App);

  // Utilisation de i18n avant de monter l'application
  app.use(i18n).mount("#app");

