<template>
  <div class="error-container">
    <img src="~assets/images/404.png" alt="error"><br>
    <div v-if="error.statusCode === 404" class="error-title">
      {{ error.message }}
    </div>
    <p>
      <nuxt-link to="/">
        Go back to Home
      </nuxt-link>
    </p>
  </div>
</template>
<script>
import '@/assets/styles/error.css'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'error' ]
}
</script>
