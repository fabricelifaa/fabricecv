// import session from 'express-session'
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'stylesheet', href: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css' }
    ],
    script:[
      { src: '/js/jquery-3.2.1.min.js' },
      { src: '/plugins/mCustomScrollbar/jquery.mCustomScrollbar.js' },
      { src: '/plugins/easing/easing.js' },
      { src: '/plugins/parallax-js-master/parallax.min.js' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#100f3a' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: 'plugins/localStorage.js', ssr: false }, //
    { src: 'plugins/owl.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // fontawesome
    '@nuxtjs/font-awesome',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  // serverMiddleware: [
  //   'redirect-ssl'
  // ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    extend (config, ctx) {}
  }
}
