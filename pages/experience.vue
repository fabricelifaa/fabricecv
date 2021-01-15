/* eslint-disable no-tabs */
<template>
  <div class="super_container">
    <!-- Header -->
    {{ setActive('/experience') }}
    <Header />

    <div class="content_container">
      <div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <!-- General Information -->
        <Generalnfo />
        <!-- Main Content -->

        <div class="main_content">
          <div class="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div class="main_subtitle">
              <!-- What I am good at -->
            </div>
            <div class="main_title">
              My Experience
            </div>
          </div>
          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <!-- Experience -->

            <div class="experience">
              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    03 / 2019 - 10 / 2020
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Senior Back-end Developer
                    </div>
                    <div class="exp_subtitle">
                      Kamgoko Technology
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>
                      <ul>
                        <li>Realization of Wordpress plugin in order to manage the jobs and news of the Blank Page project of MTN BENIN.</li>
                        <li>Realization of Wordpress plugin in order to manage some demand of the FRESH application of MTN BENIN.</li>
                        <li>Realization of the web platform of the E-survey project of MTN BENIN with technologies such as PHP, Postgresql.</li>
                        <li>Realization of the web platform and the API of Kamgoko’s WSB project using technologies such as NodeJS, PHP, Postgresql.</li>
                        <li>Realization of a Wordpress page builder in order to manage the update of the theme of the MTN BENIN website.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    11 / 2018 - 03 / 2019
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Junior Developer Fullstack (professional internship)
                    </div>
                    <div class="exp_subtitle">
                      Ministry of Life and Sustainable Development
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>
                      <ul>
                        <li>Realization of covers for an eco-citizen project with inkscape, the free graphics software under Linux.</li>
                        <li>Creation of a website coded in HTML CSS and PHP to solve an internal need within the department.</li>
                        <li>Participation in the Cisco intercom deployment project.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    2018 - Present
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Webmaster (remote)
                    </div>
                    <div class="exp_subtitle">
                      76 com group
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>
                      <ul>
                        <li>Management and updating of the Afrihit website.</li>
                        <li>Realization of logo and cover for 7 6 com.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    02 / 2018 - 07 / 2018
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Entry Level Developer (academic internship)
                    </div>
                    <div class="exp_subtitle">
                      Mify Sarl
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>
                      <ul>
                        <li>Implementation of a Web platform to display data that will be transmitted by sensors with the Flask framework.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
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
import '@/assets/styles/experience.css'
import '@/assets/styles/experience_responsive.css'
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
  pageTransition: {
    name: 'slide-right',
    mode: 'in-out',
    duration: 3000
  },
  methods: {
    ...mapMutations({
      setActive: 'menu/setActive'
    })
  },
  head () {
    return {
      title: 'Fabrice FABIYI - Experience',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Fabrice FABIYI Experience, Developer Back-end, Fabrice FABIYI, FABIYI Portofolio, Portofolio Website, Hire Freelancer, Website Freelancer, Back-end developper skills' },
        { hid: 'description', name: 'description', content: 'Fabrice FABIYI Back-end developper experience page.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fab2dev.com/experience/' },
        { property: 'og:description', content: 'Fabrice FABIYI Back-end developper experience page.' },
        { property: 'og:image', content: '/icon.png' }
      ],
      script: [
        { src: '/js/jquery-3.2.1.min.js' },
        { src: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.js' },
        { src: '/plugins/easing/easing.js' },
        { src: '/plugins/parallax-js-master/parallax.min.js' },
        { src: 'js/experience.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  }
}
</script>
