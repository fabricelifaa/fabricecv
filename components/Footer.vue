<template>
  <div align="center" style="padding-top: 30px;">
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
