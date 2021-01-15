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
              What I am good at
            </div> -->
            <div class="main_title">
              My Portfolio
            </div>
          </div>

          <!-- Sorting -->
          <div class="portfolio_categories button-group filters-button-group">
            <ul>
              <li class="portfolio_category active is-checked" data-filter="*">
                All
              </li>
              <li class="portfolio_category" data-filter=".p_web">
                Websites
              </li>
              <li class="portfolio_category" data-filter=".p_graphic">
                Graphic design
              </li>
              <li class="portfolio_category" data-filter=".p_api">
                Api project and wordpress plugins
              </li>
            </ul>
          </div>

          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <div class="portfolio_grid grid clearfix">
              <!-- Portfolio Item -->
              <div v-for="(portofolio, index) in portofolios" :key="index" :class="portofolio.portofolio_type" class="grid-item portfolio_item">
                <img v-if="checkObject(portofolio.images)" :src="portofolio.images[0]" :alt="shortDesc(portofolio.descriptions) ">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    {{ portofolio.title }}
                  </div>
                  <div class="portfolio_item_link">
                    <nuxt-link :to="portofolioPath+portofolio.id">
                      See More
                    </nuxt-link>
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
import '@/assets/styles/portfolio.css'
import '@/assets/styles/portfolio_responsive.css'
export default {
  components: {
    Header,
    Footer,
    Generalnfo
  },
  data () {
    return {
      portofolioPath: '/portfolio/'
    }
  },
  async asyncData ({ error, $axios }) {
    const data = await $axios.$get('https://fab2dev.com:4000/api/v1/portofolio')

    if (data.success) {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({ portofolios: data.data })
        }, 1000)
      })
    } else {
      error({ statusCode: 404, message: 'Portofolio not found' })
    }
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
    },
    shortDesc (descriptions) {
      return descriptions.substring(0, 125)
    }
  },
  head () {
    return {
      title: 'Fabrice FABIYI - Portofolio',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Wordpress developer, Fabrice FABIYI Portofolio, Developer Back-end, Fabrice FABIYI, FABIYI Portofolio, Portofolio Website, Hire Freelancer, Website Freelancer, Back-end developper skills' },
        { hid: 'description', name: 'description', content: 'Fabrice FABIYI Back-end developper portofolio page.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fab2dev.com/portfolios/' },
        { property: 'og:description', content: 'Fabrice FABIYI Back-end developper portofolio page.' },
        { property: 'og:image', content: '/icon.png' }
      ],
      script: [
        { src: '/js/jquery-3.2.1.min.js' },
        { src: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.js' },
        { src: '/plugins/easing/easing.js' },
        { src: '/plugins/Isotope/isotope.pkgd.min.js' },
        { src: '/plugins/Isotope/fitcolumns.js' },
        { src: '/plugins/parallax-js-master/parallax.min.js' },
        { src: '/js/portfolio.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  }
}
</script>
