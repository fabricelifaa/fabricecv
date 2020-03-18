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
              Login
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
                      <p>Connection au compte admin</p>
                    </div>
                    <div class="contact_form_container">
                      <form id="contact_form" @submit="submitform" class="contact_form clearfix">
                        <div>
                          <input
                            id="username"
                            v-model="username"
                            type="text"
                            class="contact_input"
                            placeholder="Username"
                          >
                        </div>
                        <div><input v-model="pass" type="password" class="contact_input" placeholder="Password"></div>
                        <button class="contact_button">
                          Login
                        </button>
                      </form>
                      {{ test }}
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
// import $ from 'jquery'
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
  data () {
    return {
      username: '',
      pass: null
    }
  },
  methods: {
    ...mapMutations({
      setActive: 'menu/setActive'
    }),
    submitform: (e) => {
      e.preventDefault()
      alert(this.test)
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
