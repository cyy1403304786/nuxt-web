
export default {
  mode: 'spa',
  target: 'server',
  head: {
    title: '陈莹',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/reset.scss',   //引入公共文件
    'element-ui/lib/theme-chalk/index.css',
    // "swiper/css/swiper.css",  //swiper 样式
    'swiper/swiper-bundle.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    "@/plugins/vue-swiper.js"  //轮播图引入

  ],
  components: true,
  loading: {
    color: 'blue',
    height: '5px'
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/public', { target: 'http://localhost:8088/' }]
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV
  }
}
