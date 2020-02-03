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
            <div class="main_subtitle">
              What I am good at
            </div>
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
              <li class="portfolio_category" data-filter=".p_design">
                Design
              </li>
              <li class="portfolio_category" data-filter=".p_photography">
                Photography
              </li>
              <li class="portfolio_category" data-filter=".p_brand">
                Brand Identity
              </li>
            </ul>
          </div>

          <div class="main_content_scroll mCustomScrollbar" data-mcs-theme="minimal-dark">
            <div class="portfolio_grid grid clearfix">
              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_design">
                <img src="~assets/images/portfolio_1.jpg" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Design
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_photography">
                <img src="~assets/images/portfolio_2.jpg" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Photography
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_brand">
                <img src="~assets/images/portfolio_3.jpg" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Brand Identity
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_design">
                <img src="~assets/images/portfolio_4.jpg" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Design
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_photography">
                <img src="~assets/images/portfolio_5.jpg" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Photography
                  </div>
                  <div class="portfolio_item_link">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>

              <!-- Portfolio Item -->
              <div class="grid-item portfolio_item p_brand">
                <img src="~assets/images/portfolio_6.jpg" alt="">
                <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="portfolio_item_title">
                    Brand Identity
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
        { src: 'js/education.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  }
}
</script>
