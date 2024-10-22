//////////////////////////////////////////////////////////// TEMPLATE
///////////////////////////////////////////////////////////
<template>
    <div class="topBar">
        <div>
            <Login v-if="!user" />
            <div v-else>
                <h1>Bienvenue, {{ user.displayName }}</h1>
                <img :src="user.photoURL" alt="Avatar utilisateur" />
            </div>
        </div>
        <div class="btnBox">
            <button class="themeBtn b1" @click="setTheme('red-theme')"></button>
            <button class="themeBtn b2" @click="setTheme('green-theme')"></button>
            <button class="themeBtn b3" @click="setTheme('purple-theme')"></button>
        </div>

        <div class="langSlider">
            <div class="box">
                <input @change="toggleLanguage" class="type-checkbox" id="toogle" type="checkbox" name="name">
                <label class="estado" for="toogle">
                    <span class="aprobado">FR</span>
                    <span class="desaprobado">EN</span>
                </label>
            </div>
        </div>

    </div>
</template>


//////////////////////////////////////////////////////////// SCRIPT
///////////////////////////////////////////////////////////
<script setup>
import { useI18n } from 'vue-i18n'; 
import { useThemeStore } from '../../stores/themesStore.js'; 
import { ref, onMounted } from 'vue';
import { auth } from '../../firebase'; // Importer Firebase Auth
import Login from '../utils/GAuthButton.vue';

const { locale } = useI18n(); 
const currentLang = ref('fr'); // Langue par défaut

// État pour l'utilisateur connecté
const user = ref(null);

// Fonction pour gérer la connexion avec Google
const handleGoogleLogin = async () => {
  try {
    const loggedInUser = await signInWithGoogle();
    user.value = loggedInUser; // Mettre à jour l'utilisateur après la connexion
  } catch (error) {
    console.error("Erreur lors de la connexion Google", error);
  }
};

// Surveiller l'état de l'utilisateur connecté
onMounted(() => {
  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) {
      user.value = currentUser; // Mettre à jour l'état utilisateur
    } else {
      user.value = null; // Aucune connexion
    }
  });
});

const toggleLanguage = (event) => {
  if (event.target.checked) {
    locale.value = 'en'; 
    currentLang.value = 'en';
  } else {
    locale.value = 'fr'; 
    currentLang.value = 'fr';
  }
};
const { setTheme } = useThemeStore();

</script>



//////////////////////////////////////////////////////////// STYLE
///////////////////////////////////////////////////////////
<style>

.topBar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.05);
    z-index: 1000;
}

.btnBox {
    position: absolute;
    right: 9%;
    display: flex;
    flex-direction: row;
    gap:10px;
    height:100%;
    align-items: center;
}
.themeBtn {
    width: 16px;
    height: 16px;
    border-radius: 10px;
    border: 0px;
}
.b1 { background-color: #FF4040 }
.b2 { background-color: #1fcf2b }
.b3 { background-color: #d940ff }


span {
    font-weight: 400;
    font-family: "Varela Round", sans-serif;
}

.box {
    position: absolute;
    right: 1%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.type-checkbox {
    display: none;
}

.type-checkbox+label {
    display: block;
    width: 55px;
    height: 25px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 22px;
    box-shadow: 0px 0px 25px -3px rgba(0, 0, 0, 0.4);
    transition: all 300ms cubic-bezier(0.79, -0.01, 0.36, 1);
    cursor: pointer;
    position: relative;
}

.type-checkbox+label span {
    position: absolute;
    color: white;
    font-size: 12px;
    font-family: "Varela Round", sans-serif;
}

.type-checkbox+label span.aprobado {
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
    -webkit-animation: left-check 300ms ease-in-out;
    animation: left-check 300ms ease-in-out;
}

@-webkit-keyframes left-check {
    0% {
        opacity: 0;
        left: 1em;
    }

    100% {
        opacity: 1;
        left: 2.5em;
    }
}

@keyframes left-check {
    0% {
        opacity: 0;
        left: 1em;
    }

    100% {
        opacity: 1;
        left: 2.5em;
    }
}

.type-checkbox+label span.desaprobado {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    display: none;
    -webkit-animation: right-check 300ms ease-in-out;
    animation: right-check 300ms ease-in-out;
}

@keyframes left-check {
    0% {
        opacity: 0;
        right: 1em;
    }

    100% {
        opacity: 1;
        right: 1.3em;
    }
}

.type-checkbox+label:before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url("../../assets/fr.png") no-repeat center/cover;
    border-radius: 50%;
    box-shadow: 0px 0px 25px -3px rgba(0, 0, 0, 0.4);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    transition: left 300ms cubic-bezier(0.79, -0.01, 0.36, 1), background 300ms ease;
}

/* Changer l'image quand la checkbox est cochée */
.type-checkbox:checked+label:before {
    background: url("../../assets/en.png") no-repeat center/cover;
    left: 8px;
    /* Animation du cercle à gauche */
}


.type-checkbox:checked+label span.aprobado {
    display: none;
}

.type-checkbox:checked+label span.desaprobado {
    display: block;
}

.type-checkbox:checked+label:before {
    left: 8px;
}
</style>