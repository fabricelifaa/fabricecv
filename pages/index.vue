<template>
  <div class="super_container">
    {{ setActive('/') }}
    <Header />
    <div class="content_container">
      <div
        class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start"
      >
        <!-- General Information -->
        <Generalnfo />
        <!-- Main Content -->

        <div class="main_content">
          <div
            class="main_title_container d-flex flex-column align-items-start justify-content-end"
          >
            <div class="main_subtitle">
              BACK-END Developer
            </div>
            <div class="main_title">
              Fabrice FABIYI
            </div>
          </div>
          <div
            class="main_content_scroll"
            data-mcs-theme="minimal-dark"
          >
            <div class="about_content">
              <div class="about_title">
                Description
              </div>
              <div class="about_text">
                <p>
                  I am a senior back-end developer with a 2 years of experience in my ﬁeld and full of resources in Front-end and other areas of computer science.
                  I have agreat spirit of creativity, dynamism and willingness to carry out the tasks entrusted to me inashort time. My goal is give satisfaction to people through my work. As hobbies I like video games, basketball, reading, movies, traveling, manga and especially music is essential 😉.
                </p>
              </div>

              <!-- Loaders -->

              <div class="loaders clearfix">
                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.80" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      intuition
                    </div>
                    <!-- <div class="loader_subtitle">
                      Etiam nec odio vestibulum est.
                    </div> -->
                  </div>
                </div>

                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.83" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      creativity
                    </div>
                    <!-- <div class="loader_subtitle">
                      Odio vestibulum est mattis.
                    </div> -->
                  </div>
                </div>

                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.30" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      pure luck
                    </div>
                    <!-- <div class="loader_subtitle">
                    </div> -->
                  </div>
                </div>

                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.95" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      awesomeness
                    </div>
                    <!-- <div class="loader_subtitle">
                      Vestibulum est mattis effic.
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Generalnfo from '@/components/Generalnfo'
import '@/assets/styles/main_styles.css'
import '@/assets/styles/responsive.css'
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
  pageTransition: {
    name: 'slide-left',
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
      title: 'Fabrice FABIYI - About',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Fabrice FABIYI about, Wordpress developer, Developer Back-end, Fabrice FABIYI, FABIYI Portofolio, Portofolio Website, Hire Freelancer, Website Freelancer, Back-end developper skills' },
        { hid: 'description', name: 'description', content: 'Fabrice FABIYI Back-end developper about page.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fab2dev.com/' },
        { property: 'og:description', content: 'Fabrice FABIYI Back-end developper. Passionate about the new techniques of the web, I am looking to improve my techniques and discover new ones' },
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
        { src: '/js/custom.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  }
}
</script>
