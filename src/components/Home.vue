<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hole from '../assets/HoleText3.png'


console.clear();

gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", () => {
 gsap
   .timeline({
     scrollTrigger: {
       trigger: ".wrapper",
       start: "top top",
       end: "+=180%",
       pin: true,
       scrub: true,
       markers: true
     }
   })
   .to("img", {
     scale: 1.7,
     z: 400,
     transformOrigin: "center center",
     ease: "power1.inOut"
   })
   .to(
     ".section.hero",
     {
       scale: 1,
       transformOrigin: "center center",
       ease: "power1.inOut"
     },
     "<"
   );
});


</script>


<template>


<div class="wrapper">
 <div class="content">
   <section class="section hero"></section>
   <section class="gradient-fade"></section>
   <section class="section gradient-blue"></section>
 </div>
 <div class="image-container">
   <img :src=Hole alt="image">
 </div>
</div>


 </template>


<style>



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

.gradient-fade {
  height:300px;
  margin-top: -300px;
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(31, 46, 56, 1));
}

.content .section.hero {
  background-image: url('../assets/Mountain2.png'); 
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-container {
 width: 100%;
 height: 100vh;
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




</style>

