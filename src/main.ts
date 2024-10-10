import "./assets/main.css";
import { createI18n } from 'vue-i18n';
import { createApp } from "vue";
import App from "./App.vue";

// Messages de traduction
const messages = {
    en: {
        homeText: 'Click to my skills',
    },
    fr: {
        homeText: 'Clique pour continuer',
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

