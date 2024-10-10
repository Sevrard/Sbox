//////////////////////////////////////////////////////////// TEMPLATE
///////////////////////////////////////////////////////////
<template>
    <div class="topBar">

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
<script>

export default {
    data() {
        return {
            currentLang: 'fr' // Langue par défaut
        };
    },
    methods: {
        toggleLanguage(event) {
            // Change la langue en fonction de l'état du toggle
            if (event.target.checked) {
                this.$i18n.locale = 'en'; // Change vers anglais
            } else {
                this.$i18n.locale = 'fr'; // Retour au français
            }
        }
    }
};

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

@import url("https://fonts.googleapis.com/css?family=Varela+Round");

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