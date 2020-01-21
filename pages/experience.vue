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
              What I am good at
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
                    2016-Present
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Senior Developer
                    </div>
                    <div class="exp_subtitle">
                      Company INC
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
                  </div>
                </div>
              </div>

              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    2014-2016
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Junior Developer
                    </div>
                    <div class="exp_subtitle">
                      Company INC
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
                  </div>
                </div>
              </div>

              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    2012-2014
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Entry Level Developer
                    </div>
                    <div class="exp_subtitle">
                      Company INC
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>Consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
                  </div>
                </div>
              </div>

              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    2011-2012
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Entry Level Developer
                    </div>
                    <div class="exp_subtitle">
                      Company INC
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
                  </div>
                </div>
              </div>

              <!-- Experience Item -->
              <div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div class="exp_time">
                    2010-2011
                  </div>
                </div>
                <div class="exp_content">
                  <div class="exp_title_container">
                    <div class="exp_title">
                      Entry Level Developer
                    </div>
                    <div class="exp_subtitle">
                      Company INC
                    </div>
                  </div>
                  <div class="exp_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
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
