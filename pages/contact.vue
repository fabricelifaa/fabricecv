<template>
  <div class="super_container">
    <!-- Header -->
    {{ setActive('contact') }}
    <Header />
    <div class="content_container">
      <div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <!-- General Information -->
        <Generalnfo />
        <!-- Main Content -->

        <div class="main_content">
          <div class="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div class="main_subtitle">
              What clients say
            </div>
            <div class="main_title">
              Contact me
            </div>
          </div>
          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <!-- Contact -->

            <div class="contact">
              <div class="container-fluid">
                <div class="row">
                  <!-- Contact Form -->
                  <div class="col-xl-6">
                    <div class="contact_text">
                      <p>Pour tout vos travaux de création de site web et besoins de developpeur back-end n'hésitéz pas a me contactez directement en remplissant le formulaire ci-dessous ou en écrivant sur mon mail ou numéro.</p>
                    </div>
                    <div class="contact_form_container">
                      <form id="contact_form" action="#" class="contact_form clearfix">
                        <div><input type="text" class="contact_input" placeholder="Name" required="required"></div>
                        <div><input type="email" class="contact_input" placeholder="E-mail" required="required"></div>
                        <input type="text" class="contact_input" placeholder="Subject" required="required">
                        <textarea class="contact_input contact_textarea" placeholder="Message" required="required" />
                        <button class="contact_button">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>

                  <!-- Contact Map -->
                  <!-- <div class="col-xl-6">
                    <div class="contact_map">
                      <div class="map">
                        <div id="google_map" class="google_map">
                          <div class="map_container">
                            <div id="map" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
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
import '@/assets/styles/contact.css'
import '@/assets/styles/contact_responsive.css'
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
        { src: '/js/contact.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  }
}
</script>
