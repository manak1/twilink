require('dotenv').config()
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'TwiLink(ツイリンク) | 自分だけのリンク集を作ろう ' || '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      {
        name: 'google-site-vertification',
        content: 'qmp4-89AZhAo6vkmT0NgQJzFMPkIuAUpLs1yqDJMUU0',
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'TwiLink(ツイリンク)。リンクをたくさん貼るとごちゃごちゃしがちなTwitterプロフィールをシンプルにリンク一つでまとめることができるサイトです。自分だけのリンク集を作成しよう！。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'TwiLink(ツイリンク)',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TwiLinkで自分だけのリンク集を作ろう！',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://twilink.click',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'TwiLink(ツイリンク)。リンクをたくさん貼るとごちゃごちゃしがちなTwitterプロフィールをシンプルにリンク一つでまとめることができるサイトです。自分だけのリンク集を作成しよう！。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://twilink.click/images/ogp/ogp.jpg',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['animate.css/animate.min.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/firebase.js' },
    '@/service/AuthService.ts',
    { src: '~/plugins/vuedraggable.js', ssr: false },
    '@/plugins/vuelidate',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // Doc: https://github.com/nuxt-community/stylelint-module
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-147115071-1',
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-fontawesome'],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
  env: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.stroageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
    apiURl: process.env.apiUrl,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isServer }) {
      if (isServer) {
        config.externals = {
          '@firebase/app': 'commonjs @firebase/app',
          '@firebase/firestore': 'commonjs @firebase/firestore',
        }
      }
    },
  },
}
