<template>
  <div class="super_container">
    <!-- Header -->
    {{ setActive('/education') }}
    <Header />
    <div class="content_container">
      <div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <!-- General Information -->
        <Generalnfo />

        <!-- Main Content -->

        <div class="main_content">
          <div class="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div class="main_subtitle">
              <!-- Mon parcour scolaire -->
            </div>
            <div class="main_title">
              My Education
            </div>
          </div>
          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <!-- Education -->

            <div class="education">
              <!-- Education Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2018
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/escae.jpg" alt="">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      ESCAE BENIN
                    </div>
                    <div class="edu_subtitle">
                      B.Sc. in Computer System and Software
                    </div>
                  </div>
                  <!-- <div class="edu_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
                  </div> -->
                </div>
              </div>

              <!-- Education Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2015
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/edu-hat.png" alt="">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      CEG Le Plateau
                    </div>
                    <div class="edu_subtitle">
                      baccalaureate of science
                    </div>
                  </div>
                  <!-- <div class="edu_text">
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
                  </div> -->
                </div>
              </div>

              <!-- Education Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2011
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/edu-hat.png" alt="">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      CEG Suru-Lere
                    </div>
                    <div class="edu_subtitle">
                      Patent of undergraduate study
                    </div>
                  </div>
                  <!-- <div class="edu_text">
                    <p>Consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit ame. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna.</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div class="main_subtitle">
              <!-- Mon parcour scolaire -->
            </div>
            <div class="main_title">
              My Certifications
            </div>
            <p class="notice-msg">
              <span>*</span> Copy and paste my name into the openclassroom request field to display the certificate. Click here to Copy <span id="copy_name" @click="copyToClipboard">Fabrice</span>
              <input id="textcopied" type="text" value="Fabrice" style="border: 0px; padding: 0px; margin: 0px; position: absolute; left: -9999px; top: 0px;">
            </p>
          </div>
          <div class="main_content_scroll" data-mcs-theme="minimal-dark">
            <!-- Certifications -->

            <div class="education">
              <!-- certifications Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2019
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/OpenClassrooms.png" alt="openclassroom logo">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      OPENCLASSROOM
                    </div>
                    <div class="edu_subtitle">
                      Bootstrap
                    </div>
                  </div>
                  <div class="edu_text">
                    <p><a href="https://openclassrooms.com/fr/course-certificates/1513349388" target="_blank">View certificate</a></p>
                  </div>
                </div>
              </div>

              <!-- certifications Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2019
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/OpenClassrooms.png" alt="openclassroom logo">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      OPENCLASSROOM
                    </div>
                    <div class="edu_subtitle">
                      NodeJS
                    </div>
                  </div>
                  <div class="edu_text">
                    <p><a href="https://openclassrooms.com/fr/course-certificates/8040365240" target="_blank">View certificate</a></p>
                  </div>
                </div>
              </div>

              <!-- certifications Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2019
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/OpenClassrooms.png" alt="openclassroom logo">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      OPENCLASSROOM
                    </div>
                    <div class="edu_subtitle">
                      Use REST APIs in your web projects
                    </div>
                  </div>
                  <div class="edu_text">
                    <p><a href="https://openclassrooms.com/fr/course-certificates/1177241947" target="_blank">View certificate</a></p>
                  </div>
                </div>
              </div>

              <!-- Education Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2017
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/OpenClassrooms.png" alt="openclassroom logo">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      OPENCLASSROOM
                    </div>
                    <div class="edu_subtitle">
                      Manage of linux system
                    </div>
                  </div>
                  <div class="edu_text">
                    <p><a href="https://openclassrooms.com/fr/course-certificates/5794690373" target="_blank">View certificate</a></p>
                  </div>
                </div>
              </div>

              <!-- Education Item -->
              <div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div class="edu_year">
                    2017
                  </div>
                </div>
                <div>
                  <div class="edu_image">
                    <img src="~assets/images/OpenClassrooms.png" alt="openclassroom logo">
                  </div>
                </div>
                <div class="edu_content">
                  <div class="edu_title_container">
                    <div class="edu_title">
                      OPENCLASSROOM
                    </div>
                    <div class="edu_subtitle">
                      Cryptocurrency
                    </div>
                  </div>
                  <div class="edu_text">
                    <p><a href="https://openclassrooms.com/fr/course-certificates/8718166086" target="_blank">View certificate</a></p>
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
import '@/assets/styles/education.css'
import '@/assets/styles/education_responsive.css'
export default {
  components: {
    Header,
    Footer,
    Generalnfo
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
  methods: {
    ...mapMutations({
      setActive: 'menu/setActive'
    }),
    copyToClipboard: (e) => {
      e.preventDefault()
      // $('#textcopied').val($('#copy_name').text())
      const copiedText = document.getElementById('textcopied')
      copiedText.select()
      try {
        document.execCommand('copy')
        navigator.vibrate([500])
        document.getElementById('copy_name').innerHTML = 'copied'
      } catch (err) {
        alert('Not copied!')
      } finally {
      }
      // document.execCommand('copy')
      // alert(copiedText.value)
    }
  },
  head () {
    return {
      title: 'Education',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Fabrice FABIYI Education, Developer Back-end, Fabrice FABIYI, FABIYI Portofolio, Portofolio Website, Hire Freelancer, Website Freelancer, Back-end developper skills' },
        { hid: 'description', name: 'description', content: 'Fabrice FABIYI Back-end developper education page.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fab2dev.com/education/' },
        { property: 'og:description', content: 'Fabrice FABIYI Back-end developper education page.' },
        { property: 'og:image', content: '/icon.png' }
      ],
      script: [
        { src: 'js/education.js' }
      ],
      link: []
    }
  }
}
</script>
