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
  props: [ 'error' ],
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
  }
}
</script>
