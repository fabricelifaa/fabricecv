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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit amet,
                  aliquam lorem. Fusce id ligula non risus mollis consectetur.
                  Nam lobortis, erat quis pulvinar dignissim, velit ligula
                  ullamcorper ipsum, at sodales elit odio at velit. Sed a est a
                  quam mattis suscipit. Proin et faucibus diam. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Phasellus vitae
                  sapien porttitor, dignissim quam sit amet, aliquam lorem.
                  Fusce id ligula non risus mollis consectetur. Nam lobortis,
                  erat quis pulvinar dignissim, velit ligula ullamcorper ipsum,
                  at sodales elit odio at velit. Sed a est a quam mattis
                  suscipit.
                </p>
              </div>

              <!-- Loaders -->

              <div class="loaders clearfix">
                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.75" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      intuition
                    </div>
                    <div class="loader_subtitle">
                      Etiam nec odio vestibulum est.
                    </div>
                  </div>
                </div>

                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.83" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      creativity
                    </div>
                    <div class="loader_subtitle">
                      Odio vestibulum est mattis.
                    </div>
                  </div>
                </div>

                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.25" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      pure luck
                    </div>
                    <div class="loader_subtitle">
                      Vestibulum est mattis effic.
                    </div>
                  </div>
                </div>

                <!-- Loader -->
                <div class="loader_container">
                  <div class="loader" data-perc="0.95" />
                  <div class="loader_content text-center">
                    <div class="loader_title">
                      awesomeness
                    </div>
                    <div class="loader_subtitle">
                      Vestibulum est mattis effic.
                    </div>
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
  methods: {
    ...mapMutations({
      setActive: 'menu/setActive'
    })
  },
  head () {
    return {
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
