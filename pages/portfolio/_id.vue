<template>
  <div class="super_container">
    <!-- Header -->
    {{ setActive('/portfolios') }}
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
                <div v-if="checkObject(portofolio.images)" class="test_slider_container">
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
                    <div v-for="(image, index) in portofolio.images" :key="index" class="test_item">
                      <div class="test_image">
                        <img :src="image">
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
                  {{ portofolio.descriptions }}
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
    }),
    checkObject (object) {
      if (object === null) {
        return false
      }
      return true
    }
  },
  head () {
    return {
      title: this.portofolio.title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Fabrice FABIYI portofolio, Developer Back-end, Fabrice FABIYI, FABIYI Portofolio, Portofolio Website, Hire Freelancer, Website Freelancer, Back-end developper skills' },
        { hid: 'description', name: 'description', content: this.portofolio.descriptions },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fab2dev.com/portfolio/' + this.post_id },
        { property: 'og:description', content: this.portofolio.descriptions },
        { property: 'og:image', content: '/icon.png' }
      ],
      script: [
        { src: '/js/testimonials.js' }
      ],
      link: []
    }
  },
  // eslint-disable-next-line vue/order-in-components
  async asyncData ({ params, error, $axios }) {
    const data = await $axios.$get(`https://fab2dev.com:4000/api/v1/portofolio/${params.id}`)
    if (data.success) {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({
            portofolio: data.data,
            post_id: params.id
          })
        }, 1000)
      })
    } else {
      error({ statusCode: 404, message: 'Portofolio not found' })
    }
  }
}
</script>
