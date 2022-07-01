import i18n from './config/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BDP',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/api.js',
    '~/plugins/clickOutside.client.js',
    '~/plugins/vueAwesomeSwiper.js',
    '~/plugins/other-libraries.js',
    '~/plugins/vue-js-modal.js',
    '~/plugins/axios.js',
    { src: '~/plugins/client-libraries', mode: 'client' },
    // '~/plugins/v-viewer.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        seo: true,
        strategy: 'prefix',
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en',
          },
          {
            code: 'ru',
            name: 'Русский',
            iso: 'ru',
          },
          {
            code: 'uz',
            name: 'Ўзбекча',
            iso: 'uz',
          },
          {
            code: 'kl',
            name: 'Qoraqalpoq',
            iso: 'kl',
          },
        ],
        vueI18n: i18n,
      },
    ],
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // 'vue-currency-filter/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://apistaging.europharm.uz/api',
    // credentials: true,
    // debug: process.env.NODE_ENV !== 'production',
  },

  router: {
    // prefetchLinks: false,
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 600, 700],
    },
    display: 'swap',
  },

  // currencyFilter: {
  //   thousandsSeparator: ',',
  //   fractionCount: 0,
  //   fractionSeparator: '.',
  //   symbolSpacing: true,
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
}
