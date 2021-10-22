export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  loading: {
    color: 'blue',
    height: '5px'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: process.env.BASE || "/",
    middleware: 'redirect'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'マナブアレルギー',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: (process.env.BASE || "/") + 'favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'マナブアレルギー',
    lang: 'ja',
    short_name: 'マナアレ',
    title: 'マナブアレルギー',
    'og:title': 'マナブアレルギー',
    description: 'マナブアレルギーのサイトです',
    'og:description': 'マナブアレルギーのサイトです',
    theme_color: '#212121',
    background_color: '#212121'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['pixi.js'],
    babel: {
      presets({ isServer }, [preset, options]) {
        options.loose = true;
      }
    }
  }
}
