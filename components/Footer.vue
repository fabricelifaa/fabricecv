<template>
  <div align="center">
    Copyright &copy; {{ getCurrentYear () }} All rights reserved
  </div>
</template>
<script>
export default {
  methods: {
    getCurrentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
