//////////////////////////////////////////////////////////// TEMPLATE
///////////////////////////////////////////////////////////
<template>

  <div class="socialBar hidden">
    <ul>
      <li class='social-cube'><a href="#"><span></span></a></li>
      <li class='social-cube'><a href="#"><span></span></a></li>
      <li class='social-cube'><a href="#"><span></span></a></li>
      <li class='social-cube'><a href="#"><span></span></a></li>
      <li class='social-cube'><a href="#"><span></span></a></li>
    </ul>
  </div>

</template>


//////////////////////////////////////////////////////////// SCRIPT
///////////////////////////////////////////////////////////
<script setup lang="ts">

window.addEventListener("scroll", () => {
  const socialBar = document.querySelector(".socialBar");
  if (window.scrollY === 0) {
    socialBar?.classList.add("display");
    socialBar?.classList.remove("hidden");
  }
  if (window.scrollY > 1300) {
    socialBar?.classList.remove("hidden");
    socialBar?.classList.add("display");
  } else {
    socialBar?.classList.remove("display");
    socialBar?.classList.add("hidden");
  }
});

</script>

//////////////////////////////////////////////////////////// STYLE
///////////////////////////////////////////////////////////
<style>
.socialBar {
  position: fixed;
  z-index: 2000;
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

ul {
  z-index: 2000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

ul li {
  position: relative;
  list-style: none;
  margin: 0.6rem;
}

ul li:before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 20%;
  background: black;
  border-radius: 25%;
  opacity: 0;
  filter: blur(0.75rem);
}

ul li:nth-child(1) a span:before {
  content: "";
}

ul li:nth-child(1) a span:after {
  content: "";
  background: #3b5998;
  color: white;
}

ul li:nth-child(2) a span:before {
  content: "";
}

ul li:nth-child(2) a span:after {
  content: "";
  background: #1da1f2;
  color: white;
}

ul li:nth-child(3) a span:before {
  content: "";
}

ul li:nth-child(3) a span:after {
  content: "";
  background: #007bb5;
  color: white;
}

ul li:nth-child(4) a span:before {
  content: "";
}

ul li:nth-child(4) a span:after {
  content: "";
  background: black;
  color: white;
}

ul li:nth-child(5) a span:before {
  content: "";
}

ul li:nth-child(5) a span:after {
  content: "";
  background: #ea4c89;
  color: white;
}

ul li:hover:before {
  opacity: 1;
  transform: scale();
}

ul li:hover a span:before {
  transform: rotateX(90deg) translateY(-50%);
}

ul li:hover a span:after {
  transform: rotateX(0deg) translateY(0);
}

ul li a {
  width: 3rem;
  height: 3rem;
  display: block;
  transition: 0.5s;
  border-radius: 0.25rem;
}

ul li a span {
  width: 100%;
  height: 100%;
  font-size: 2rem;
}

ul li a span:before {
  content: "";
  font-family: fontAwesome;
  text-align: center;
  line-height: 3.1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  color: var(--mainColor);
  transform-origin: top;
  transition: transform 0.5s;
  /* border: 1px solid black; */
  border-radius: 0.25rem;
}

ul li a span:after {
  content: "";
  font-family: fontAwesome;
  text-align: center;
  line-height: 3.1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  color: black;
  transform-origin: bottom;
  transform: rotateX(-90deg) translateY(50%);
  transition: transform 0.5s;
}
</style>