<template>

    <div class="authBtnContent">
      <button @click="handleGoogleLogin">Se connecter avec Google</button>
      <div v-if="user">
        <p>Bienvenue, {{ user.displayName }}</p>
        <img :src="user.photoURL" alt="Avatar utilisateur" />
      </div>
    </div>

</template> 

  
<script>
  import { ref } from 'vue';
  import { signInWithGoogle } from '../../firebase'; 
  
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

<style>
  .authBtnContent {
    display: flex;
    font-size: 7px;
    color: white;
    font-family: Monospace;
    gap: 10px;

    img {
      width: 36px;
    }
  }
</style>
  