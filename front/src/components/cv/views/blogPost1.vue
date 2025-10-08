<template>
  <!-- Fond animé -->
  <div class="lm-animated-bg" style="background-image: url(/img/main_bg.png);"></div>

  <div class="page">
    <div class="page-content">
      <header id="site_header" class="header mobile-menu-hide">
        <div class="header-content">
          <div class="header-photo">
            <img src="/img/main_photo.jpg" alt="Alex Smith" />
          </div>
          <div class="header-titles">
            <h2>Alex Smith</h2>
            <h4>Web Designer</h4>
          </div>
        </div>

        <ul class="main-menu">
          <li class="active">
            <RouterLink :to="{ path: '/', hash: '#about-me' }" class="nav-anim">
              <span class="menu-icon lnr lnr-home"></span><span class="link-text">About Me</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/', hash: '#resume' }" class="nav-anim">
              <span class="menu-icon lnr lnr-graduation-hat"></span><span class="link-text">Resume</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/', hash: '#portfolio' }" class="nav-anim">
              <span class="menu-icon lnr lnr-briefcase"></span><span class="link-text">Portfolio</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/', hash: '#blog' }" class="nav-anim">
              <span class="menu-icon lnr lnr-book"></span><span class="link-text">Blog</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/', hash: '#contact' }" class="nav-anim">
              <span class="menu-icon lnr lnr-envelope"></span><span class="link-text">Contact</span>
            </RouterLink>
          </li>
        </ul>

        <div class="social-links">
          <ul>
            <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>

        <div class="header-buttons">
          <a href="#" target="_blank" class="btn btn-primary">Download CV</a>
        </div>
      </header>

      <!-- Mobile Navigation -->
      <div class="menu-toggle"><span></span><span></span><span></span></div>

      <div class="content-area single-page-area">
        <div class="single-page-content">
          <article class="post">
            <div class="post-thumbnail">
              <img src="/img/blog/blog_post_1_full.jpg" alt="image" />
            </div>

            <div class="post-content">
              <header class="entry-header">
                <div class="entry-meta entry-meta-top">
                  <span><a href="#" rel="category tag">UI</a></span>
                </div>
                <h2 class="entry-title">Best Practices for Animated Progress Indicators</h2>
              </header>

              <div class="entry-content">
                <div class="row">
                  <div class="col-xs-12 col-sm-12">
                    <div class="col-inner">
                      <p>Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus…</p>
                      <p>Vivamus vitae neque molestie, porta libero sed, tincidunt leo…</p>

                      <blockquote class="quote">
                        Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque…
                        <footer class="quote-author"><span>Larry L. Johnson</span></footer>
                      </blockquote>

                      <p>Etiam interdum vulputate risus, vitae elementum neque consectetur sed…</p>
                      <p>Donec sit amet dolor ante. Vivamus vel massa accumsan…</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="entry-meta entry-meta-bottom">
                <div class="date-author">
                  <span class="entry-date">
                    <a href="#" rel="bookmark"><i class="far fa-clock"></i> <span class="entry-date">March 16, 2020</span></a>
                  </span>
                  <span class="author vcard">
                    <a class="url fn n" href="#" rel="author"><i class="fas fa-user"></i> LMPixels</a>
                  </span>
                </div>

                <div class="entry-share btn-group share-buttons">
                  <a href="#" class="btn" target="_blank" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="btn" target="_blank" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="btn" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>

              <div class="post-tags">
                <div class="tags">
                  <a href="#" rel="tag">animate</a>
                  <a href="#" rel="tag">bar</a>
                  <a href="#" rel="tag">design</a>
                  <a href="#" rel="tag">progress</a>
                  <a href="#" rel="tag">ui</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Si tu conserves jQuery + plugins via <script> global (index.html)
  const w: any = window as any

  // PerfectScrollbar sur la zone de contenu (optionnel)
  if (w.PerfectScrollbar) {
    const el = document.querySelector('.content-area')
    if (el) new w.PerfectScrollbar(el)
  }

  // Magnific Popup (si tu ajoutes des lightboxes dans l’article)
  if (w.$ && w.$.fn && w.$.fn.magnificPopup) {
    w.$('.lightbox').magnificPopup({ type: 'image', gallery: { enabled: true } })
  }
})
</script>

<style scoped>
/* spécifique à cette vue si besoin */
</style>
