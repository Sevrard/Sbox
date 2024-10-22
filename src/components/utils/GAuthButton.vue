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
  