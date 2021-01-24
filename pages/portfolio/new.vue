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
                      <div id="error-container" :class="[errorStatus ? '' : 'd-none']" class="contact_text bg-danger text-center">
                        <p>{{ ErrorMsg }}</p>
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
                            type="file"
                            class="contact_input"
                            placeholder="Files"
                            required="required"
                            multiple
                            name="portofolio_images"
                            @change="uploadFiles"
                          >
                        </div>
                        <p>
                          <span v-if="uploadspinner" class="upload_loader" />
                        </p>
                        <button class="contact_button" @click="submitPortofolio">
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
      errorStatus: false,
      ErrorMsg: '',
      uploadspinner: false,
      images: {}
    }
  },
  asyncData () {
    return new Promise((resolve) => {
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
    is_Empty (fields) {
      fields.forEach((field) => {
        if (!field) {
          return false
        }
      })
      return true
    },
    async submitPortofolio (e) {
      e.preventDefault()
      this.errorStatus = false
      const fields = [this.title, this.descriptions, this.portofolioType, this.images]
      if (!this.is_Empty(fields)) {
        this.errorStatus = true
        this.ErrorMsg = 'Error verify the fields and retry!'
        setTimeout(function () {
          this.errorStatus = false
        }, 5000)
        return false
      }
      const getTokken = this.$store.state.sessionKey
      await this.$axios({
        url: 'https://fab2dev.com:4000/api/v1/portofolio/',
        method: 'post',
        data: {
          title: this.title,
          descriptions: this.descriptions,
          portofolio_type: this.portofolioType,
          images: Object.assign({}, this.images)
        },
        headers: {
          authorization: getTokken
        }
      }).then((response) => {
        if (response.data.status) {
          this.ErrorMsg = 'Portofolio added successfully!'
          this.errorStatus = true
          setTimeout(function () {
            this.errorStatus = false
          }, 3000)
          this.resetData()
        } else {
          this.errorStatus = true
          this.ErrorMsg = response.data.message
          setTimeout(function () {
            this.errorStatus = false
          }, 3000)
          return false
        }
      }).catch()
    },
    uploadFiles () {
      this.files = this.$refs.portofolio_images.files
      this.errorStatus = false
      this.uploadspinner = true
      if (this.files === '') {
        this.errorStatus = true
        this.ErrorMsg = 'File not uploaded!'
        this.$refs.portofolio_images.values = ''
        setTimeout(function () {
          this.errorStatus = false
        }, 3000)
        return
      }
      if (!this.check_files_ext(this.files)) {
        this.errorStatus = true
        this.ErrorMsg = 'File not uploaded!'
        this.$refs.portofolio_images.values = ''
        setTimeout(function () {
          this.errorStatus = false
          this.uploadspinner = false
        }, 3000)
        return
      }

      const formData = new FormData()
      const getTokken = this.$store.state.sessionKey
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]
        formData.append(`portofolio_images${i}`, file)
      }
      this.$axios.post('https://fab2dev.com:4000/api/v1/portofolio/files',
        formData,
        {
          headers: {
            authorization: getTokken,
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then((response) => {
        if (response.data.success) {
          this.images = response.data.files
          this.errorStatus = true
          this.uploadspinner = false
          this.ErrorMsg = 'File uploaded!'
          setTimeout(function () {
            this.errorStatus = false
          }, 3000)
        } else {
          this.errorStatus = true
          this.uploadspinner = false
          this.ErrorMsg = 'File not uploaded!'
          setTimeout(function () {
            this.errorStatus = false
          }, 3000)
        }
      }).catch()
    },
    check_files_ext (files) {
      const re = new RegExp('(.*?)\\.(jpg|png|webp)$')
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
        { src: '/js/contact.js' }
      ],
      link: []
    }
  }
}
</script>
