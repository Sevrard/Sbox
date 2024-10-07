

//////////////////////////////////////////////////////////// SCRIPT ///////////////////////////////////////////////////////////
<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { ScrollToPlugin } from "gsap/ScrollToPlugin";


    export default {
        mounted() {
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        },
        methods: {

            scrollToSection() {
                console.log("scroll  222 to section");
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
            },

        },
    };

    window.addEventListener("scroll", () => {
        const button = document.querySelector(".nextButton");

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

//////////////////////////////////////////////////////////// TEMPLATE ///////////////////////////////////////////////////////////
<template>
  <div class="rightPart">
    <div @click="scrollToSection" class="nextButton">
      <i id="moveDown" class="fa fa-chevron-down fa-3x bounce"></i>
    </div>
  </div>
</template>

//////////////////////////////////////////////////////////// STYLE ///////////////////////////////////////////////////////////
<style>
.rightPart {
  color: #ff4040;
  position: absolute;
  z-index: 2000;
  right: 13.4%;
  top: 43%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  cursor: pointer;
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateY(-13px);
    transform: translateY(-13px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}

@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-13px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -ms-transform: translateY(-13px);
    transform: translateY(-13px);
  }
  60% {
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}

.bounce {
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}
</style>
