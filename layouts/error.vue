<template>
  <div class="error-container-body">
    <div class="error-container">
      <img src="~assets/images/404.png" alt="error"><br>
      <div v-if="error.statusCode === 404" class="error-title">
        {{ error.message != "" ? error.message : "Page not found !" }}
      </div>
      <div v-if="checkstatus(error.statusCode)" class="error-title">
        Page not found !
      </div>
      <p>
        <nuxt-link to="/">
          Go back to Home
        </nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
import '@/assets/styles/error.css'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  methods: {
    checkstatus: (status) => {
      let temp = false
      switch (status) {
        case 404:
          temp = false
          break
        case 400:
          temp = false
          break
        case 500:
          temp = false
          break
        case 505:
          temp = false
          break
        default:
          temp = true
          break
      }
      return temp
    }
  },
  head () {
    return {
      script: [
        { src: '/js/jquery-3.2.1.min.js' },
        { src: '/plugins/greensock/TweenMax.min.js' },
        { src: '/plugins/greensock/TimelineMax.min.js' },
        { src: '/plugins/scrollmagic/ScrollMagic.min.js' },
        { src: '/plugins/greensock/animation.gsap.min.js' },
        { src: '/plugins/greensock/ScrollToPlugin.min.js' },
        { src: '/plugins/progressbar/progressbar.js' },
        { src: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.js' },
        { src: '/plugins/easing/easing.js' },
        { src: '/plugins/parallax-js-master/parallax.min.js' },
        { src: '/js/custom.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
      ]
    }
  }
}
</script>
