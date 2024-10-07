
//////////////////////////////////////////////////////////// TEMPLATE ///////////////////////////////////////////////////////////
<template>

    <div class="timeline hidden">
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
    </div>

</template>


//////////////////////////////////////////////////////////// SCRIPT ///////////////////////////////////////////////////////////
<script>

    window.addEventListener("scroll", () => {
        const timeline = document.querySelector(".timeline");
        if (window.scrollY > 2500) {
            timeline?.classList.remove("hidden");
            timeline?.classList.add("display");
        } else {
            timeline?.classList.remove("display");
            timeline?.classList.add("hidden");
        }
    });

</script>



//////////////////////////////////////////////////////////// STYLE ///////////////////////////////////////////////////////////
<style>

    .timeline {
        position: fixed;
        z-index: 2000;
        color: red;
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