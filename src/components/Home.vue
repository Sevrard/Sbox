<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Hole from "../assets/HoleRed.png";

import TopBar from "./topbar/Topbar.vue"
import SocialBar from "./sidebar/Socialbar.vue"
import Timeline from "./sidebar/Timeline.vue"
import BounceButton from "./sidebar/BounceButton.vue"
import MiddleBlock from "./MiddleBlock.vue"
import AboutMe from "./AboutMe.vue"
import Skills from "./Skills.vue"

import { ref } from "vue";



console.clear();

const initialProgress = ref(50); // Valeur initiale de la progression
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Enregistrer ScrollToPlugin
window.addEventListener("scroll", () => {});
window.addEventListener("load", () => {

  // gsap.to(window, {
  //   scrollTo: { y: "img", offsetY: 0, autoKill: false }, // Scroll vers la section .gradient-blue
  //   duration: 4,
  //   ease: "power2.inOut",
  //   onComplete: () => { ScrollTrigger.refresh() },
  // });
  gsap
    .timeline({ scrollTrigger: { trigger: ".wrapper", start: "top top", end: "+=180%", pin: true, scrub: true,  }}) //markers: true
    .to("img", { scale: 1.7, z: 400, transformOrigin: "center center", ease: "power1.inOut" })
    .to(".section.hero", { scale: 1, transformOrigin: "center center", ease: "power1.inOut" },"<");
});
</script>

<template>
  <TopBar />
  <SocialBar />
  <!-- <Timeline /> -->
  <div class="fixedBackground"></div>
  <div class="wrapper">
    
    <div class="content">
      <section class="section hero"></section>

      <section class="gradient-fade-bot"></section>
      <section class="block">
        <AboutMe />
        <SkillBall />
      </section>      
      <section class="gradient-fade-top"></section>

      <section class="skills">
        <Skills />
      </section>

      <MiddleBlock />
      <section class="skills2"></section>
    </div>

    <div class="image-container">
      <BounceButton />
      <img :src="Hole" alt="image" />
    </div>

  </div>
</template>

<style>
.hidden {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.display {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.wrapper,
.content {
  position: relative;
  width: 100%;
  z-index: 1;
}

.content {
  overflow-x: hidden;
}

.content .section {
  width: 100%;
  height: 100vh;
}

.gradient-fade-bot {
  height: 300px;
  margin-top: -300px;
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(31, 46, 56, 1));
}
.gradient-fade-top {
  height: 300px;
  position: relative;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(31, 46, 56, 1));
}

.content .section.hero {
  background-image: url("../assets/Mountain2.png");
  background-position: 89% 15%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}

.image-container {
  width: 100%;
  height: 110vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  perspective: 500px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}


/* SECTION */


.fixedBackground {
  width: 100%;
  height: 200vh;
  background-image: url("../assets/Mountain.png");
  background-size: cover;
  position: fixed;
  background-position: 0% 30%;
  top: 0;
  z-index: 0;
}
.block {
  width: 100%;
  padding: 12% 0;
  background-color: #1F2E38;
}
.skills {
  width: 100%;
  height: 120vh;
  background-color: rgba(31, 46, 56, 0.5);
}

.skills2 {
  width: 100%;
  height: 120vh;
  background-color: rgba(31, 46, 56, 1);
}

.diamond {
  width: 600px; /* Largeur du losange */
  height: 800px; /* Hauteur du losange */
  background-image: 
    url("../assets/photo/p2.png"), /* L'image de fond */
    linear-gradient(#141414, #141414); 
  background-size: 80%; /* Dézoome l'image en arrière-plan */
  background-position: center; /* Centrer l'image */
  background-repeat: no-repeat; /* Empêcher la répétition de l'image */
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* Découpe en losange */
  overflow: hidden;
  position: absolute;
  right: 10%;
}


</style>
