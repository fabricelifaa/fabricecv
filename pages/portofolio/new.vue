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
            <!-- <div class="main_subtitle">
            </div> -->
            <div class="main_title">
              Add new portofolio
            </div>
          </div>
          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <!-- Contact -->

            <div class="contact">
              <div class="container-fluid">
                <div class="row">
                  <!-- Contact Form -->
                  <div class="col-xl-6">
                    <transition name="fade" mode="out-in">
                      <div id="error-container" v-bind:class="[portofolioError ? '' : 'd-none']" class="contact_text bg-danger text-center">
                        <p>{{ portofolioErrorMsg }}</p>
                      </div>
                    </transition>
                    <transition name="fade" mode="out-in">
                      <div id="success-container" v-bind:class="[portofolioError ? '' : 'd-none']" class="contact_text bg-success text-center">
                        <p>{{ portofolioErrorMsg }}</p>
                      </div>
                    </transition>
                    <div class="contact_form_container">
                      <form id="contact_form" action="#" class="contact_form clearfix" enctype="multipart/form-data">
                        <div>
                          <input
                            v-model="title"
                            type="text"
                            class="contact_input"
                            placeholder="Name"
                            required="required"
                            name="portofolio_title"
                          >
                        </div>
                        <div>
                          <select v-model="portofolioType" class="contact_input" required="required" name="portofolioType">
                            <option value="">
                              Portofolio Type
                            </option>
                            <option value="p_web">
                              Application Web
                            </option>
                            <option value="p_graphic">
                              Graphisme
                            </option>
                            <option value="p_api">
                              API and Wordpress plugins
                            </option>
                          </select>
                        </div>
                        <textarea v-model="descriptions" class="contact_input contact_textarea" placeholder="Description" required="required" name="portofolio_desc" />
                        <div>
                          <input
                            ref="portofolio_images"
                            @change="uploadFiles"
                            type="file"
                            class="contact_input"
                            placeholder="Files"
                            required="required"
                            multiple
                            name="portofolio_images"
                          >
                          <transition name="fade" mode="out-in">
                            <div id="upload-error" v-bind:class="[uploadError ? '' : 'd-none']" class="text-danger">
                              <p>{{ uploadErrorMsg }}</p>
                            </div>
                          </transition>
                        </div>
                        <button @click="submitPortofolio" class="contact_button">
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
  data () {
    return {
      title: '',
      descriptions: '',
      files: '',
      portofolioType: '',
      uploadErrorMsg: '',
      uploadError: false,
      portofolioError: false,
      portofolioErrorMsg: '',
      portofolioSuccessMsg: '',
      portofolioSuccess: false,
      images: {}
    }
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
    submitPortofolio (e) {
      e.preventDefault()
      if (this.title === '') {
        this.portofolioError = true
        this.portofolioErrorMsg = 'Error portofolio not submited'
        setTimeout(function () {
          this.portofolioError = false
        }, 5000)
      }
      const getTokken = this.$store.state.sessionKey
      this.$axios({
        url: 'http://localhost:4000/api/v1/portofolio/',
        method: 'post',
        data: {
          title: this.title,
          descriptions: this.descriptions,
          portofolio_type: this.portofolioType,
          images: Object.assign({}, this.images)
        },
        headers: {
          'authorization': getTokken
        }
      }).then((response) => {
        if (response.data.status) {
          this.portofolioSuccessMsg = 'Portofolio added successfully!'
          this.portofolioSuccess = true
          setTimeout(function () {
            this.portofolioSuccess = false
          }, 3000)
          this.resetData()
        }
      }).catch()
    },
    uploadFiles () {
      this.files = this.$refs.portofolio_images.files
      if (this.files === '') {
        this.uploadError = true
        this.uploadErrorMsg = 'File not uploaded!'
        this.$refs.portofolio_images.values = ''
        setTimeout(function () {
          this.uploadError = false
        }, 3000)
        return
      }

      if (!this.check_files_ext(this.files)) {
        this.uploadError = true
        this.uploadErrorMsg = 'File not uploaded!'
        this.$refs.portofolio_images.values = ''
        setTimeout(function () {
          this.uploadError = false
        }, 3000)
        return
      }

      const formData = new FormData()
      const getTokken = this.$store.state.sessionKey
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]
        formData.append(`portofolio_images${i}`, file)
      }
      this.$axios.post('http://localhost:4000/api/v1/portofolio/files',
        formData,
        {
          headers: {
            'authorization': getTokken,
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then((response) => {
        if (response.data.success) {
          this.images = response.data.files
          // this.resetData()
        }
      }).catch()
      // const porto = await this.$axios.$get(`http://64.227.43.157:4000/api/v1/portofolio/1`)
    },
    check_files_ext (files) {
      const re = new RegExp('(.*?)\\.(jpg|png)$')
      for (let index = 0; index < files.length; index++) {
        if (!re.test(files[index].name)) {
          return false
        }
      }
      return true
    },
    resetData () {
      this.title = ''
      this.descriptions = ''
      this.files = ''
      this.uploadErrorMsg = ''
      this.portofolioType = ''
      this.uploadError = false
      this.portofolioError = false
      this.portofolioErrorMsg = ''
      this.images = {}
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
