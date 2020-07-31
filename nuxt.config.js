
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/reset.scss',   //引入公共文件
    'element-ui/lib/theme-chalk/index.css',
    'swiper/swiper-bundle.css',
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

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/public', { target: 'http://yysmile.cn/' }]
  ],
  axios: {
    // proxyHeaders: false
  },
  build: {
    transpile: [/^element-ui/],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV
  }
}
