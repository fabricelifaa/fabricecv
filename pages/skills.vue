<template>
  <div class="super_container">
    {{ setActive('/skills') }}
    <!-- Header -->
    <Header />
    <div class="content_container">
      <div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <!-- General Information -->
        <Generalnfo />
        <!-- Main Content -->

        <div class="main_content">
          <div class="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div class="main_subtitle">
              What I am good at
            </div>
            <div class="main_title">
              My Skills
            </div>
          </div>
          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <!-- Skills Content -->
            <div class="skills">
              <div class="skills_text">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-12">
                      <p>
                        I have 2 years of experience as a back-end developer, during these 2 years I was able to acquire thanks to my ability to quickly learn more tips to perfect my work and discover a lot of new technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Progress Bars -->
              <div class="progress_bars">
                <div class="container-fluid">
                  <div class="row">
                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          Php, Codeigniter
                        </div>
                        <div
                          id="skill_1_pbar"
                          class="skill_bars"
                          data-perc="0.95"
                          data-name="skill_1_pbar"
                          data-color-start="#79ccff"
                          data-color-end="#9b74ff"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          Nodejs, Vuejs, Js
                        </div>
                        <div
                          id="skill_2_pbar"
                          class="skill_bars"
                          data-perc="0.80"
                          data-name="skill_2_pbar"
                          data-color-start="#ff4646"
                          data-color-end="#ff26d9"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          SQL and NoSQL
                        </div>
                        <div
                          id="skill_3_pbar"
                          class="skill_bars"
                          data-perc="0.70"
                          data-name="skill_3_pbar"
                          data-color-start="#0054ff"
                          data-color-end="#ff23d3"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          Python, Flask
                        </div>
                        <div
                          id="skill_4_pbar"
                          class="skill_bars"
                          data-perc="0.5"
                          data-name="skill_4_pbar"
                          data-color-start="#79ff7c"
                          data-color-end="#ffbd4a"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          Linux administration
                        </div>
                        <div
                          id="skill_5_pbar"
                          class="skill_bars"
                          data-perc="0.68"
                          data-name="skill_5_pbar"
                          data-color-start="#79ff8f"
                          data-color-end="#7b74ff"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          Blockchain
                        </div>
                        <div
                          id="skill_6_pbar"
                          class="skill_bars"
                          data-perc="0.70"
                          data-name="skill_6_pbar"
                          data-color-start="#ff2d72"
                          data-color-end="#ffab79"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          Wordpress (Plugins, API)
                        </div>
                        <div
                          id="skill_7_pbar"
                          class="skill_bars"
                          data-perc="0.95"
                          data-name="skill_7_pbar"
                          data-color-start="#79ccff"
                          data-color-end="#9b74ff"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          PWA, APIs
                        </div>
                        <div
                          id="skill_8_pbar"
                          class="skill_bars"
                          data-perc="0.60"
                          data-name="skill_8_pbar"
                          data-color-start="#79ff8f"
                          data-color-end="#7b74ff"
                        />
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="col-xl-4 col-lg-6 pb_col">
                      <div class="pb_item">
                        <div class="p_bar_title">
                          Framework 7
                        </div>
                        <div
                          id="skill_9_pbar"
                          class="skill_bars"
                          data-perc="0.8"
                          data-name="skill_9_pbar"
                          data-color-start="#79ff7c"
                          data-color-end="#ffbd4a"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Milestones -->
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Generalnfo from '@/components/Generalnfo'
import '@/assets/styles/skills.css'
import '@/assets/styles/skills_responsive.css'
export default {
  components: {
    Header,
    Footer,
    Generalnfo
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
  methods: {
    ...mapMutations({
      setActive: 'menu/setActive'
    })
  },
  head () {
    return {
      title: 'Fabrice FABIYI - Skills',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Fabrice FABIYI Skills, Developer Back-end, Fabrice FABIYI, FABIYI Portofolio, Portofolio Website, Hire Freelancer, Website Freelancer, Back-end developper skills' },
        { hid: 'description', name: 'description', content: 'Fabrice FABIYI Back-end developper skills page.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fab2dev.com/skills/' },
        { property: 'og:description', content: 'Fabrice FABIYI Back-end developper skills page.' },
        { property: 'og:image', content: '/icon.png' }
      ],
      script: [
        { src: '/js/jquery-3.2.1.min.js' },
        { src: '/plugins/greensock/TweenMax.min.js' },
        { src: '/plugins/greensock/TimelineMax.min.js' },
        { src: '/plugins/scrollmagic/ScrollMagic.min.js' },
        { src: '/plugins/greensock/animation.gsap.min.js' },
        { src: '/plugins/greensock/ScrollToPlugin.min.js' },
        { src: '/plugins/progressbar/progressbar.js' },
        { src: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.js' },
        { src: '/plugins/easing/easing.js' },
        { src: '/plugins/parallax-js-master/parallax.min.js' },
        { src: '/js/skills.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  }
}
</script>
