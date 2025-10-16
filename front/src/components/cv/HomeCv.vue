<!-- src/components/cv/views/HomeCv.vue -->
<template>
<div class="bodycv">
    <!-- Animated Background -->
  <!-- <div class="lm-animated-bg" style="background-image: url(/img/main_bg.png);"></div> -->


  <div class="page">
    <div class="page-content">
      <header id="site_header" class="header mobile-menu-hide">
        <div class="header-content">
          <div class="header-photo">
            <img src="../../assets/photo/p1.png" alt="Me" />
          </div>
          <div class="header-titles">
            <h2>Stephane Evrard</h2>
            <h4>Developpeur full-stack</h4>
          </div>
        </div>

       <ul class="main-menu">
            <li :style="{ display: 'none' }" >
                <a href="#home" class="nav-anim">
                <span class="menu-icon lnr lnr-home"></span>
                <span v-html="$t('menuHome')"  class="link-text"></span>
                </a>
            </li>
            <li :class="{ active: current === 'first' }">
                <a href="#first" class="nav-anim">
                <span class="menu-icon lnr lnr-home"></span>
                <span v-html="$t('menuHome')" class="link-text"></span>
                </a>
            </li>
            <li :class="{ active: current === 'about-me' }">
                <a href="#about-me" class="nav-anim">
                <span class="menu-icon lnr lnr-user"></span>
                <span v-html="$t('menuAbout')" class="link-text"></span>
                </a>
            </li>
            <li :class="{ active: current === 'resume' }">
                <a href="#resume" class="nav-anim">
                <span class="menu-icon lnr lnr-graduation-hat"></span>
                <span v-html="$t('menuExperience')" class="link-text"></span>
                </a>
            </li>
            <li :class="{ active: current === 'contact' }">
                <a href="#contact" class="nav-anim">
                <span class="menu-icon lnr lnr-envelope"></span>
                <span class="link-text">Contact</span>
                </a>
            </li>
        </ul>


        <div class="social-links">
          <ul>
            <li><a href="#" target="https://www.linkedin.com/in/stephane-evrard-8905959b/"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="#" target="https://www.facebook.com/stephane.evrard"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>

        <div class="header-buttons">
          <a href="/CV_Evrard_Stephane.pdf" download class="btn btn-primary">Download CV</a>
        </div>

        <div class="copyrights">© 2020 All rights reserved.</div>
      </header>

      <!-- Mobile Navigation -->
      <div class="menu-toggle">
        <span></span><span></span><span></span>
      </div>

      

      <div class="content-area">
        <div class="animated-sections">
          <!-- Home -->
          <section data-id="home" class="animated-section start-page"
         :class="{ 'section-active': current==='first' }">
            <div class="section-content vcentered">
              <div class="row">
                <div class="col-sm-12">
                  <div class="title-block">
                    <div class="aboutMe">
                        <div class="wording">
                            <h1 v-html="$t('hello')"></h1>
                            <h2 v-html="$t('aboutMe')"></h2>
                            <p v-html="$t('shortDescription')"></p>
                            <p v-html="$t('cvText')"></p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- About Me -->
          <section data-id="about-me" class="animated-section"
            :class="{ 'section-active': current === 'about-me' || !current }">
            <div class="section-content">
              <div v-html="$t('aboutTitle')" class="page-title"></div>
              <div class="row">
                <div class="col-xs-12 col-sm-7">
                  <p v-html="$t('aboutShort')"></p>
                </div>

                <div class="col-xs-12 col-sm-5">
                  <div class="info-list">
                    <ul>
                      <li><span class="title">Age</span><span class="value">34</span></li>
                      <li><span class="title">Residence</span><span class="value">France</span></li>
                      <!-- <li><span class="title">Address</span><span class="value">88 Some Street, Some Town</span></li> -->
                      <li><span class="title">E-mail</span><span class="value">stephane.evrard62@gmail.com</span></li>
                      <li><span class="title">Phone</span><span class="value">06.26.95.16.13</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="white-space-50"></div>

              <!-- What I Do -->
              <div class="row">
                <div class="col-xs-12">
                  <div class="block-title" v-html="$t('aboutTitle2')"></div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6">
                  <div class="col-inner">
                    <div class="info-list-w-icon">
                      <div class="info-block-w-icon">
                        <div class="ci-icon"><i class="lnr lnr-store"></i></div>
                        <div class="ci-text">
                          <h4 v-html="$t('aboutSkill1')"></h4>
                          <p v-html="$t('aboutSkillShort1')"></p>
                        </div>
                      </div>
                      <div class="info-block-w-icon">
                        <div class="ci-icon"><i class="lnr lnr-laptop-phone"></i></div>
                        <div class="ci-text">
                          <h4 v-html="$t('aboutSkill2')"></h4>
                          <p v-html="$t('aboutSkillShort2')"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6">
                  <div class="col-inner">
                    <div class="info-list-w-icon">
                      <div class="info-block-w-icon">
                        <div class="ci-icon">
                            <PrinterIcon class="w-8 h-8 text-blue-400" />
                        </div>
                        <div class="ci-text">
                          <h4 v-html="$t('aboutSkill3')"></h4>
                          <p v-html="$t('aboutSkillShort3')"></p>
                        </div>
                      </div>
                      <div class="info-block-w-icon">
                        <div class="ci-icon">
                          <CpuIcon class="w-8 h-8 text-blue-400" />
                        </div>
                        <div class="ci-text">
                          <h4 v-html="$t('aboutSkill4')"></h4>
                          <p v-html="$t('aboutSkillShort4')"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- Resume -->

           <section data-id="resume" class="animated-section" :class="{ 'section-active': current==='resume' }">
                <div class="section-content">  
                  <div class="page-title">
                    <h2>Resume</h2>
                  </div>

                  <div class="row">
                    <div class="col-xs-12 col-sm-7">

                      <div class="block-title">
                        <h3>Education</h3>
                      </div>
                      
                      <div class="timeline timeline-second-style clearfix">
                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2011</h5>
                            <span class="item-company">Lycée Sophie Berthelot</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('education1')" class="item-title"></h4>
                            <p v-html="$t('education1Text')"></p>
                          </div>
                        </div>

                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2012-2014</h5>
                            <span class="item-company">Université littoral côte d'opale</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('education2')" class="item-title"></h4>
                            <p v-html="$t('education2Text')"></p>
                          </div>
                        </div>
                      </div>

                      <div class="white-space-50"></div>

                      <div class="block-title">
                        <h3>Experience</h3>
                      </div>

                      <div class="timeline timeline-second-style clearfix">
                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 v-html="$t('exp1Period')" class="item-period"></h5>
                            <span class="item-company">NerdForge</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('exp1')" class="item-title"></h4>
                            <p v-html="$t('exp1Text')"></p>
                          </div>
                        </div>

                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2022 - 2024</h5>
                            <span class="item-company">Kiliba (Paris)</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4  v-html="$t('exp2')"class="item-title"></h4>
                            <p v-html="$t('exp2Text')"></p>
                          </div>
                        </div>
                        
                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2021 - 2022</h5>
                            <span class="item-company">Freelance</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('exp3')" class="item-title"></h4>
                            <p v-html="$t('exp3Text')"></p>
                          </div>
                        </div>

                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2019 - 2021</h5>
                            <span class="item-company">RDV Transport</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('exp4')" class="item-title"></h4>
                            <p v-html="$t('exp4Text')"></p>
                          </div>
                        </div>

                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2018 (5mois)</h5>
                            <span class="item-company">Neographic Digital</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('exp5')" class="item-title"></h4>
                            <p v-html="$t('exp5Text')"></p>
                          </div>
                        </div>

                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2016 - 2018</h5>
                            <span class="item-company">Innova-web / Esport-France</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('exp6')" class="item-title"></h4>
                            <p v-html="$t('exp6Text')"></p>
                          </div>
                        </div>

                        <div class="timeline-item clearfix">
                          <div class="left-part">
                            <h5 class="item-period">2014 - 2016</h5>
                            <span class="item-company">Maporientation (Maptoomi)</span>
                          </div>
                          <div class="divider"></div>
                          <div class="right-part">
                            <h4 v-html="$t('exp7')" class="item-title"></h4>
                            <p v-html="$t('exp7Text')"></p>
                          </div>
                        </div>
                      </div>

                    </div>

                    <!-- Skills & Certificates -->
                    <div class="col-xs-12 col-sm-5">
                      <!-- Design Skills -->
                      <div class="block-title">
                        <h3>Design <span>Skills</span></h3>
                      </div>

                      <div class="skills-info skills-second-style">
                        <!-- Skill 1 -->
                        <div class="skill clearfix">
                          <h4>Chat GPT/Midjourney</h4>
                          <div class="skill-value">90%</div>
                        </div>
                        <div class="skill-container skill-1">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 1 -->
                        
                        <!-- Skill 2 -->
                        <div class="skill clearfix">
                          <h4>Canvas</h4>
                          <div class="skill-value">65%</div>
                        </div>
                        <div class="skill-container skill-2">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 2 -->
                        
                        <!-- Skill 3 -->
                        <div class="skill clearfix">
                          <h4>Photoshop</h4>
                          <div class="skill-value">80%</div>
                        </div>
                        <div class="skill-container skill-3">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 3 -->
                        
                      </div>
                      <!-- End of Design Skills -->

                      <div class="white-space-10"></div>

                      <!-- Coding Skills -->
                      <div class="block-title">
                        <h3>Coding <span>Skills</span></h3>
                      </div>

                      <div class="skills-info skills-second-style">
                        <!-- Skill 5 -->
                        <div class="skill clearfix">
                          <h4>Javascripts/TS</h4>
                          <div class="skill-value">90%</div>
                        </div>
                        <div class="skill-container skill-5">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 5 -->

                        <!-- Skill 6 -->
                        <div class="skill clearfix">
                          <h4>Python</h4>
                          <div class="skill-value">55%</div>
                        </div>
                        <div class="skill-container skill-6">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 6 -->
                        
                        <!-- Skill 7 -->
                        <div class="skill clearfix">
                          <h4>HTML/CSS</h4>
                          <div class="skill-value">100%</div>
                        </div>
                        <div class="skill-container skill-7">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 7 -->
                        
                      
                      </div>
                      <!-- End of Coding Skills -->

                      <div class="white-space-10"></div>

                      <!-- CMS Skills -->
                      <div class="block-title">
                        <h3>Dev <span>Skills</span></h3>
                      </div>

                      <div class="skills-info skills-second-style">
                        <!-- Skill 9-->
                        <div class="skill clearfix">
                          <h4>React / Vite.js</h4>
                          <div class="skill-value">90%</div>
                        </div>
                        <div class="skill-container skill-9">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 9 -->

                        <!-- Skill 10 -->
                        <div class="skill clearfix">
                          <h4>Node.js / Express</h4>
                          <div class="skill-value">70%</div>
                        </div>
                        <div class="skill-container skill-10">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 10 -->
                        
                        <!-- Skill 10 -->
                        <div class="skill clearfix">
                          <h4>Vue.js</h4>
                          <div class="skill-value">70%</div>
                        </div>
                        <div class="skill-container skill-10">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 10 -->
                        
                        <!-- Skill 11 -->
                        <div class="skill clearfix">
                          <h4>GraphQL</h4>
                          <div class="skill-value">65%</div>
                        </div>
                        <div class="skill-container skill-11">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 11 -->

                        <!-- Skill 12 -->
                        <div class="skill clearfix">
                          <h4>MongoDB</h4>
                          <div class="skill-value">80%</div>
                        </div>
                        <div class="skill-container skill-12">
                          <div class="skill-percentage"></div>
                        </div>
                        <!-- End of Skill 12 -->

                      </div>
                      <!-- End of Coding Skills -->

                      <div class="white-space-10"></div>

                      <!-- Knowledges -->
                      <div class="block-title">
                        <h3>Knowledges</h3>
                      </div>

                      <ul class="knowledges">
                        <li>API Rest</li>
                        <li>Shopify/prestashop API</li>
                        <li>Salesforce</li>
                        <li>JIRA</li>
                        <li>Docker</li>
                        <li>Github</li>
                        <li>Datadog</li>
                        <li>Airflow</li>
                        <li>VScode</li>
                      </ul>
                      <!-- End of Knowledges -->
                    </div>
                    <!-- End of Skills & Certificates -->
                  </div>

                  <div class="white-space-50"></div>

                </div>
              </section>

          <!-- Contact -->
          <section data-id="contact" class="animated-section" :class="{ 'section-active': current==='contact' }">
            <div class="section-content">
              <div class="page-title"><h2>Contact</h2></div>

              <div class="row">
                <div class="col-xs-12 col-sm-4">
                  <div class="lm-info-block gray-default">
                    <i class="lnr lnr-map-marker"></i><h4>France</h4>
                  </div>
                  <div class="lm-info-block gray-default">
                    <i class="lnr lnr-phone-handset"></i><h4>06.26.95.16.13</h4>
                  </div>
                  <div class="lm-info-block gray-default">
                    <i class="lnr lnr-envelope"></i><h4>Stephane.evrard62@gmail.com</h4>
                  </div>
                  <div class="lm-info-block gray-default">
                    <i class="lnr lnr-checkmark-circle"></i><h4 v-html="$t('contactFreelance')"></h4>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-8">
                  <div class="lmpixels-map">
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                  </div>
                  <div class="block-title"><h3 v-html="$t('contactHelp')"></h3></div>

   

                  <!-- Si tu gardes le PHP côté serveur, l’action peut rester telle quelle -->
                  <form id="contact_form" class="contact-form" @submit.prevent="sendEmail">
                    <div class="messages"></div>
                    <div class="controls two-columns">
                      <div class="fields clearfix">
                        <div class="left-column">
                          <div class="form-group form-group-with-icon">
                            <input id="form_name" v-model="form.name" type="text" name="name" class="form-control" required data-error="Name is required.">
                            <label v-html="$t('contactName')"></label><div class="form-control-border"></div><div class="help-block with-errors"></div>
                          </div>

                          <div class="form-group form-group-with-icon">
                            <input id="form_email"  v-model="form.email" type="email" name="email" class="form-control" required data-error="Valid email is required.">
                            <label v-html="$t('contactEmail')"></label><div class="form-control-border"></div><div class="help-block with-errors"></div>
                          </div>

                          <div class="form-group form-group-with-icon">
                            <input id="form_subject" type="text" v-model="form.subject" name="subject" class="form-control" required data-error="Subject is required.">
                            <label v-html="$t('contactSujet')"></label><div class="form-control-border"></div><div class="help-block with-errors"></div>
                          </div>
                        </div>

                        <div class="right-column">
                          <div class="form-group form-group-with-icon">
                            <textarea id="form_message" v-model="form.message" name="message" class="form-control" rows="7" required data-error="Please, leave me a message."></textarea>
                            <label>Message</label><div class="form-control-border"></div><div class="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>

                      <div class="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI" data-theme="dark"></div>
                      <input type="submit" class="button btn-send" :value="$t('contactSendMessage')">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  </div>

</div>
  
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import PrinterIcon from '@/assets/icons/3dprinter.svg'
    import CpuIcon from '@/assets/icons/cpu.svg'

    const sections = ['home', 'first', 'about-me', 'resume', 'contact']
    const current = ref<'home'| 'first' | 'about-me' | 'resume' | 'contact'>('first')

    
    function setFromHash() {
      const h = window.location.hash?.replace('#', '') || 'first'
      if (sections.includes(h)) current.value = h as typeof current.value
    }

    function goTo(id: typeof current.value) {
      current.value = id
      history.replaceState(null, '', `#${id}`)
    }

    onMounted(() => {
      setFromHash()
      window.addEventListener('hashchange', setFromHash)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('hashchange', setFromHash)
    })

    // --- Formulaire de contact ---
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const API_BASE = import.meta.env.VITE_API_BASE;
    async function sendEmail() {
      try {
        const response = await fetch(`${API_BASE}/api/send-mail`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form.value)
        })

        if (response.ok) {
          alert('Email envoyé !')
          form.value = { name: '', email: '', subject: '', message: '' } // reset
        } else {
          alert('Erreur lors de l’envoi')
        }
      } catch (error) {
        console.error(error)
        alert('Erreur réseau')
      }
    }
</script>


<style scoped>


</style>
