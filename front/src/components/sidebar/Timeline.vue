//////////////////////////////////////////////////////////// TEMPLATE
///////////////////////////////////////////////////////////
<template>

    <div class="timeline hidden">
        <i class="fa-solid fa-circle" @click="scrollToSection(500)" data-scroll="500"></i>
        <i class="fa-solid fa-circle" @click="scrollToSection(1000)" data-scroll="1000"></i>
        <i class="fa-solid fa-circle" @click="scrollToSection(1500)" data-scroll="1500"></i>
        <i class="fa-solid fa-circle" @click="scrollToSection(2000)" data-scroll="2000"></i>
    </div>

</template>


//////////////////////////////////////////////////////////// SCRIPT
///////////////////////////////////////////////////////////
<script>
import { gsap } from "gsap";

window.addEventListener("scroll", () => {
    const timeline = document.querySelector(".timeline");
    if (window.scrollY > 1300) {
        timeline?.classList.remove("hidden");
        timeline?.classList.add("display");
    } else {
        timeline?.classList.remove("display");
        timeline?.classList.add("hidden");
    }
});

export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    },
    methods: {
        scrollToSection(value) {
            const button = document.querySelector(".rightPart");
            if (button) {
                button.classList.add("hidden");
            }
            gsap.to(window, {
                scrollTo: { y: ".gradient-blue", offsetY: value, autoKill: false },
                duration: 4,
                ease: "power2.inOut",
                onComplete: () => {
                    ScrollTrigger.refresh();
                },
            });
        },

    },
};

</script>



//////////////////////////////////////////////////////////// STYLE
///////////////////////////////////////////////////////////
<style>
.timeline {
    position: fixed;
    z-index: 2000;
    color: var(--mainColor);
    height: 100%;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 10px;
}
</style>