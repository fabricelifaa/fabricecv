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
                      <form id="contact_form" action="#" class="contact_form clearfix" enctype="multipart/form-data">
                        <div><input type="text" class="contact_input" placeholder="Name" required="required" name="portofolio_title"></div>
                        <textarea class="contact_input contact_textarea" placeholder="Description" required="required" name="portofolio_desc" />
                        <div>
                          <input
                            @change="uploadFiles"
                            type="file"
                            class="contact_input"
                            placeholder="Files"
                            required="required"
                            multiple
                            name="portofolio_images"
                          >
                          <input type="hidden" name="images[]">
                        </div>
                        <button class="contact_button">
                          Add
                        </button>
                      </form>
                    </div>
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
import '@/assets/styles/contact.css'
import '@/assets/styles/contact_responsive.css'
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
  middleware: 'auth',
  methods: {
    ...mapMutations({
      setActive: 'menu/setActive'
    }),
    uploadFiles () {
      // eslint-disable-next-line no-console
      console.log(this.$store.state.sessionKey)
      // const porto = await this.$axios.$get(`http://64.227.43.157:4000/api/v1/portofolio/1`)
    }
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
