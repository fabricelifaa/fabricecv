<template>
  <header class="header">
    <div
      class="header_content d-flex flex-row align-items-center justify-content-start"
    >
      <div class="logo">
        Fab<span>2</span>dev
      </div>
      <div
        class="main_nav d-flex flex-row align-items-end justify-content-start"
      >
        <ul class="d-flex flex-row align-items-center justify-content-start">
          <li v-for="menu in menus" :key="menu.key" :class="activeMenu == menu.key ? 'active' : ''" class="">
            <nuxt-link :to="menu.key">
              {{ menu.name }}
            </nuxt-link>
          </li>
          <li v-if="isLogged">
            <a href="#" @click="logoutAdmin">
              {{ logoutRoute.name }}
            </a>
          </li>
        </ul>
        <div class="header_button ml-auto">
          <a href="https://www.upwork.com/o/profiles/users/~0176a56b97b3f11956/" target="_blank">Available for freelance work</a>
          <div
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <img src="~assets/images/download.png" alt="">
          </div>
        </div>
      </div>
      <!-- Menu -->
      <div class="menu">
        <div
          class="menu_content d-flex flex-row align-items-start justify-content-end"
        >
          <div class="hamburger ml-auto">
            menu
          </div>
          <div class="menu_nav text-right">
            <ul>
              <li v-for="menu in menus" :key="menu.key" :class="activeMenu == menu.key ? 'active' : ''">
                <nuxt-link :to="menu.key">
                  {{ menu.name }}
                </nuxt-link>
              </li>
              <li v-if="isLogged">
                <a href="#" @click="logoutAdmin">
                  {{ logoutRoute.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    menus () {
      return this.$store.state.menu.menus
    },
    activeMenu () {
      // console.log(this.$store.state.menu.activeMenu)
      return this.$store.state.menu.activeMenu
    },
    isLogged () {
      return this.$store.state.isLogged
    },
    logoutRoute () {
      return this.$store.state.logoutRoute
    }
  },
  methods: {
    logoutAdmin () {
      this.$store.commit('removeSession')
      this.$nuxt.$router.replace({ path: '/' })
    }
  }
}
</script>
