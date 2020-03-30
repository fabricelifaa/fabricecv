<template>
  <div class="super_container">
    <!-- Header -->
    {{ setActive('portofolio') }}
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
              <div class="grid-item portfolio_item p_web">
                <img src="~assets/images/fresh2.png" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Fresh MTN
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_api">
                <img src="~assets/images/blank2.png" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Blank Page MyMTN
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_api">
                <img src="~assets/images/MTN_brand.png" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title text-center">
                    Page builder for<br>
                    MTN Website theme
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_web">
                <img src="~assets/images/e-survey1.png" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    E-survey
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_web">
                <img src="~assets/images/ewsb.png" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    WSB
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_web">
                <img src="~assets/images/tekfoods.png" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    TekFoods
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_web">
                <img src="~assets/images/afrihit.jpg" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    AFRIHIT
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_web">
                <img src="~assets/images/ministere2.png" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Project Management
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
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
