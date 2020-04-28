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
                    <transition name="fade" mode="out-in">
                      <div id="error-container" v-bind:class="[loginError ? '' : 'd-none']" class="contact_text bg-danger text-center">
                        <p>{{ loginErrorMsg }}</p>
                      </div>
                    </transition>
                    <div class="contact_form_container">
                      <form id="contact_form" @submit="submitform" class="contact_form clearfix">
                        <div>
                          <input
                            id="username"
                            @change="hideErrorContainer"
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
import $ from 'jquery'
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
      pass: null,
      loginError: false,
      loginErrorMsg: 'Connection failed check your login'
    }
  },
  // middleware: 'loginness',
  methods: {
    ...mapMutations({
      setActive: 'menu/setActive'
    }),
    hideErrorContainer () {
      $('#error-container').addClass('d-none')
    },
    async submitform (e) {
      e.preventDefault()
      await this.$axios({
        url: 'http://localhost:4000/api/v1/login',
        method: 'post',
        data: {
          username: this.username,
          password: this.pass
        },
        withCredentials: false,
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
        .then((response) => {
          if (response.data.status) {
            // this.$store.commit('setSession', response.data.token)
            this.$store.dispatch('updatesession', response.data.token)
            this.$nuxt.$router.replace({ path: '/portofolio/new' })
          } else {
            this.loginError = true
            setTimeout(() => {
              this.loginError = false
            }, 5000)
          }
        })
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
