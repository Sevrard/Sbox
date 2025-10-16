<!-- src/components/cv/views/Portfolio2.vue -->
<template>
  <div id="ajax-page" class="ajax-page-content">
    <div class="ajax-page-wrapper">
      <div class="ajax-page-nav">
        <div class="nav-item ajax-page-prev-next">
          <RouterLink class="ajax-page-load" to="/portfolio-1">
            <i class="lnr lnr-chevron-left" />
          </RouterLink>
          <RouterLink class="ajax-page-load" to="/portfolio-3">
            <i class="lnr lnr-chevron-right" />
          </RouterLink>
        </div>
        <div class="nav-item ajax-page-close-button">
          <a id="ajax-page-close-button" href="#" @click.prevent="goBackToPortfolio">
            <i class="lnr lnr-cross" />
          </a>
        </div>
      </div>

      <div class="ajax-page-title">
        <h1>Portfolio Project 2</h1>
      </div>

      <div class="row">
        <div class="col-sm-8 col-md-8 portfolio-block">
          <div class="owl-carousel portfolio-page-carousel">
            <!-- <div class="item"><img src="/img/portfolio/full/1.jpg" alt="" /></div>
            <div class="item"><img src="/img/portfolio/full/2.jpg" alt="" /></div>
            <div class="item"><img src="/img/portfolio/full/3.jpg" alt="" /></div> -->
          </div>

          <div class="portfolio-page-video embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://player.vimeo.com/video/97102654?autoplay=0"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>

        <div class="col-sm-4 col-md-4 portfolio-block">
          <div class="project-description">
            <div class="block-title"><h3>Description</h3></div>
            <ul class="project-general-info">
              <li><p><i class="fa fa-user"></i> Alex Smith</p></li>
              <li><p><i class="fa fa-globe"></i> <a href="#" target="_blank">www.project-site.com</a></p></li>
              <li><p><i class="fa fa-calendar"></i> 25 december, 2016</p></li>
            </ul>

            <p class="text-justify">
              Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum
              primis in faucibus.
            </p>

            <div class="tags-block">
              <div class="block-title"><h3>Technology</h3></div>
              <ul class="tags">
                <li><a>HTML5</a></li>
                <li><a>CSS3</a></li>
                <li><a>jQuery</a></li>
                <li><a>Ajax</a></li>
                <li><a>PHP5</a></li>
              </ul>
            </div>

            <div class="btn-group share-buttons">
              <div class="block-title"><h3>Share</h3></div>
              <a href="#" target="_blank" class="btn"><i class="fab fa-facebook-f" /></a>
              <a href="#" target="_blank" class="btn"><i class="fab fa-twitter" /></a>
              <a href="#" target="_blank" class="btn"><i class="fab fa-dribbble" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const goBackToPortfolio = () => router.push({ path: '/', hash: '#portfolio' })

onMounted(() => {
  const w: any = window as any
  if (w.$ && w.$.fn && w.$.fn.imagesLoaded && w.$.fn.owlCarousel) {
    w.$('.portfolio-page-carousel').imagesLoaded(() => {
      w.$('.portfolio-page-carousel').owlCarousel({
        smartSpeed: 1200,
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: false,
        margin: 10,
        autoHeight: true,
      })
    })
  }
})
</script>

<style scoped>
/* spécifique si besoin */
</style>
