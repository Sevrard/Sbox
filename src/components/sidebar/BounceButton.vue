//////////////////////////////////////////////////////////// SCRIPT
///////////////////////////////////////////////////////////
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const scrollToSection = () => {
  const button = document.querySelector(".rightPart");
  if (button) {
    button.classList.add("hidden");
  }
  gsap.to(window, {
    scrollTo: { y: ".gradient-blue", offsetY: -2000, autoKill: false },
    duration: 4,
    ease: "power2.inOut",
    onComplete: () => {
      ScrollTrigger.refresh();
    },
  });

};

// Ajouter un listener pour le scroll
window.addEventListener("scroll", () => {
  const button = document.querySelector(".rightPart");
  if (window.scrollY === 0) {
    button?.classList.add("display");
    button?.classList.remove("hidden");
  }
  if (window.scrollY > 50) {
    button?.classList.add("hidden");
    button?.classList.remove("display");
  }
});
</script>

//////////////////////////////////////////////////////////// TEMPLATE
///////////////////////////////////////////////////////////
<template>

  <div @click="scrollToSection" class="rightPart">

    <div class="rightText">
      <h1> {{ $t('clickToNext') }} </h1>
      <!-- <h2> {{$t('clickToNext')}} </h2> -->
      <!-- <h3> {{$t('clickToNext')}} </h3>  -->
    </div>
    <div class='pin'></div>
    <div class='pulse'></div>


  </div>
</template>

//////////////////////////////////////////////////////////// STYLE
///////////////////////////////////////////////////////////
<style>
.rightPart {
  position: absolute;
  z-index: 2000;
  right: 12%;
  top: 45%;
  transform: translateY(-100%);
  display: flex;
  flex-direction: column;
  gap: 1px;
  cursor: pointer;
  align-content: center;
  justify-content: center;

  .rightText {
    color: var(--mainColor);
    font-size: 15px;
    text-align: center;
    margin-bottom:7px

  }

  h1 {
    color: white;
    font-size: 45px;
    font-family: 'goodbye';
  }

  h2 {
    color: white;
    font-size: 40px;
    font-family: monospace;
    line-height: 1.5;
    font-weight: 100;
  }

}

/* ICONE CSS */

.pin {
  align-self: center;
  width: 38px;
  height: 38px;
  border-radius: 50% 50% 50% 0;
  background: var(--mainColor);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -10px 0 0 -5px;
  -webkit-animation-name: bounce;
  -moz-animation-name: bounce;
  -o-animation-name: bounce;
  -ms-animation-name: bounce;
  animation-name: bounce;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -o-animation-duration: 1s;
  -ms-animation-duration: 1s;
  animation-duration: 1s;
}

.pin:after {
  content: '';
  width: 22px;
  height: 22px;
  margin: 8px 0 0 8px;
  background: black;
  position: absolute;
  border-radius: 50%;
}

.pulse {
  align-self: center;
  background: rgba(38, 57, 117, 0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  left: 50%;
  top: 50%;
  margin: 0px 0px 0px -5px;
  -webkit-transform: rotateX(55deg);
  -moz-transform: rotateX(55deg);
  -o-transform: rotateX(55deg);
  -ms-transform: rotateX(55deg);
  transform: rotateX(55deg);
  z-index: -2;
}

.pulse:after {
  content: "";
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: absolute;
  margin: -12px 0 0 -18px;
  -webkit-animation: pulsate 1s ease-out;
  -moz-animation: pulsate 1s ease-out;
  -o-animation: pulsate 1s ease-out;
  -ms-animation: pulsate 1s ease-out;
  animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -webkit-box-shadow: 0 0 1px 2px #89849b;
  box-shadow: 0 0 1px 2px #89849b;
  -webkit-animation-delay: 1.1s;
  -moz-animation-delay: 1.1s;
  -o-animation-delay: 1.1s;
  -ms-animation-delay: 1.1s;
  animation-delay: 1.1s;
}

@-moz-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }

  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }

  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}

@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }

  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }

  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}

@-o-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }

  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }

  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}

@keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }

  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }

  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}


</style>
