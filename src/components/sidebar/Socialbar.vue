
//////////////////////////////////////////////////////////// TEMPLATE ///////////////////////////////////////////////////////////
<template>

    <div class="socialBar">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-github"></i>
    </div>

</template>


//////////////////////////////////////////////////////////// SCRIPT ///////////////////////////////////////////////////////////
<script setup lang="ts">

    window.addEventListener("scroll", () => {
    const socialBar = document.querySelector(".socialBar");
    if (window.scrollY === 0) {
        socialBar?.classList.add("display");
        socialBar?.classList.remove("hidden");
    }
    if (window.scrollY > 2500) {
        socialBar?.classList.remove("hidden");
        socialBar?.classList.add("display");
    } else {
        socialBar?.classList.remove("display");
        socialBar?.classList.add("hidden");
    }
    });

</script>



//////////////////////////////////////////////////////////// STYLE ///////////////////////////////////////////////////////////
<style>

    .socialBar {
        position: fixed;
        z-index: 2000;
        color: red;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        width: 75px;
        justify-content: center;
        align-items: center;
        gap: 65px;
        font-size: 30px;
    }

</style>