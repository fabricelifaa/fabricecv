<template>
  <p>hiiiiiiiii</p>
</template>
<script>

export default {
  // layout: 'portofolio',
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  asyncData (context) {
    if (process.client) {
      // const data = context.app.$getUser(1)
      return { portofolio: 'test' }
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    // console.log(this.$getUser(1))
  }
}
</script>
