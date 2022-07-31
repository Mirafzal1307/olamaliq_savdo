
import i18n from './utils/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Test",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        as: "style",
        onload: "this.onload=null;this.rel='stylesheet'",
        href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vee-validate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv",
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        defaultLocale: "en",
        detectBrowserLanguage: false,
        seo: true,
        strategy: 'prefix',
        rootRedirect: 'en',
        locales: [
          {
            code: "en",
            name: "English",
            iso: "en"
          },
          {
            code: "ru",
            name: "Русский",
            iso: "ru"
          },
          {
            code: "uz",
            name: "Ўзбекча",
            iso: "uz"
          },
        ],
        vueI18n: i18n
      }
    ],
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/auth'
  ],
  // auth: {
  //   // localStorage: false,
  //   // cookie: {
  //   //   expires: 7
  //   // },
  //   // strategies: {
  //   //   local: {
  //   //     token: {
  //   //       property: 'jwt',
  //   //       // maxAge: 30 * 24 * 60 * 60,
  //   //       // global: true,
  //   //       // type: 'Bearer'
  //   //     },
  //       // user: {
  //       //   property: false,
  //       // },
  //       // endpoints: {
  //       //   login: { url: 'auth/local', method: 'post' },
  //       //   user: { url: 'users/me', method: 'get' },
  //       //   logout: false
  //       // },
  //       // redirect: {
  //       //   login: '/',
  //       //   logout: '/',
  //       //   user: '/profile',
  //       //   callback: '/'
  //       // }
  //     }
  //   }
  // },

  // // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // router: {
  //   middleware: ['auth'],
  //   prefetchLinks: false
  // },

  // googleFonts: {
  //   families: {
  //     Inter: [300, 400, 600, 700]
  //   },
  //   display: "swap"
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    }
  }
};
