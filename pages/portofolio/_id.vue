<template>
  <div class="super_container">
    <!-- Header -->
    {{ setActive('/portofolio') }}
    <Header />

    <div class="content_container">
      <div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <!-- General Information -->
        <Generalnfo />

        <!-- Main Content -->

        <div class="main_content">
          <div class="main_title_container d-flex flex-column align-items-start justify-content-end">
            <!-- <div class="main_subtitle">
            </div> -->
            <div class="main_title">
              {{ portofolio.title }}
            </div>
          </div>
          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <!-- Testimonials -->

            <div class="testimonials">
              <!-- Testimonials Slider -->
              <client-only>
                <div class="test_slider_container">
                  <carousel
                    :autoplay="false"
                    :loop="true"
                    :dots="true"
                    :nav="false"
                    :margin="30"
                    :items="3"
                    :responsive="{
                      0:{items:1},
                      900:{items:2},
                      1199:{items:1},
                      1440:{items:2},
                      1680:{items:3}
                    }"
                  >
                    <!-- Slide -->
                    <div class="test_item">
                      <div class="test_image">
                        <img src="~assets/images/blank2.png">
                      </div>
                    </div>

                    <div class="test_item">
                      <div class="test_image">
                        <img src="~assets/images/blank2.png">
                      </div>
                    </div>

                    <div class="test_item">
                      <div class="test_image">
                        <img src="~assets/images/blank2.png">
                      </div>
                    </div>
                  </carousel>
                </div>
              </client-only>
            </div>

            <!-- Description -->

            <div class="description_content">
              <div class="description_title">
                Description
              </div>
              <div class="description_text">
                <p>
                  I am a back-end developer with a lot of experience in my ﬁeld and full of resources in Front-end and other areas of computer science.
                  I have agreat spirit of creativity, dynamism and willingness to carry out the tasks entrusted to me inashort time. As hobbies I like video games, basketball, reading, movies, traveling, manga and especially music is essential 😉.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Generalnfo from '@/components/Generalnfo'
import '@/assets/styles/testimonials.css'
import '@/assets/styles/testimonials_responsive.css'
export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
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
        { src: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.js' },
        { src: '/plugins/easing/easing.js' },
        { src: '/plugins/parallax-js-master/parallax.min.js' },
        { src: '/js/testimonials.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  },
  // eslint-disable-next-line vue/order-in-components
  async asyncData ({ params, error, $axios }) {
    const data = await $axios.$get(`http://localhost:4000/api/v1/portofolio/${params.id}`)
    if (data.success) {
      return new Promise((resolve) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
        setTimeout(function () {
          resolve({ portofolio: data.data })
        }, 1000)
      })
    } else {
      // eslint-disable-next-line nuxt/no-this-in-fetch-data
      error({ statusCode: 404, message: 'Portofolio not found' })
    }
  }
}
</script>
