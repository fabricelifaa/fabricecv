<template>
  <div class="super_container">
    <!-- Header -->
    {{ setActive('experience') }}
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
                    03 / 2019 - Present
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
                    <p>J'ai eu à développer plusieurs plugins et api wordpress, j'ai aussi travaillé en groupe avec d'autres développeur pour la mise en place d'une API de gestion de campagne par sms basée sur nodejs et vuejs pour l'interface d'administration, J'ai aussi eu à apporter des modifications sur plusieurs des applications Web à l'aide de vuejs.</p>
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
                    <p>J'ai créer une apllication web pour la gestion des rapports de chaque semaine. J'ai aussi réalisé quelque cover pour les évenements annexes du ministère (eco-citoyens) à l'aide de inkscape. J'ai aussi assisté au déploiement d'interphone cisco.</p>
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
                      Afrihit group
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>J'ai refait le site Afrihit avec php pour gérer les téléchargements de musique, j'ai aussi fait certains des covers utilisé sur le site Afrihit.</p>
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
                    <p>I implemented a web platform to display data that will be transmitted by sensor swith the Flask framework.</p>
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
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
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
