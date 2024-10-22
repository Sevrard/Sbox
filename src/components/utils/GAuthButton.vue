<template>
    <div>
      <h1>Se connecter</h1>
      <button @click="handleGoogleLogin">Se connecter avec Google</button>
      <div v-if="user">
        <p>Bienvenue, {{ user.displayName }}</p>
        <img :src="user.photoURL" alt="Avatar utilisateur" />
      </div>
    </div>
  </template> 

  
  <script>
  import { ref } from 'vue';
  import { signInWithGoogle } from '../../firebase'; // Importer la fonction d'authentification
  
  export default {
    setup() {
      const user = ref(null);
  
      const handleGoogleLogin = async () => {
        try {
          const loggedInUser = await signInWithGoogle();
          user.value = loggedInUser; // Mettre à jour l'état utilisateur
        } catch (error) {
          console.error("Erreur lors de la connexion", error);
        }
      };
  
      return {
        user,
        handleGoogleLogin
      };
    }
  };
  </script>
  

  VITE_FIREBASE_API_KEY="AIzaSyC8ygpyL5tO3YIfGTJRoK4N5OPfu4meTnY"
VITE_FIREBASE_AUTH_DOMAIN="logopedie-87c67.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="logopedie-87c67"
VITE_FIREBASE_STORAGE_BUCKET="logopedie-87c67.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="607119035341"
VITE_FIREBASE_APP_ID="1:607119035341:web:c2dbc209c5bb650cd91284"
VITE_FIREBASE_MEASUREMENT_ID="G-VRW7RQ71HK"