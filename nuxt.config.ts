// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  // Configure for GitHub Pages deployment
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
      failOnError: false
    }
  },

  app: {
    baseURL:  '/',
    head: {
      title: 'vennU - Third Space Social Mood Marketplace',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Connect with people based on your current social vibe for spontaneous micro-meetups in public spaces.' }
      ]
    }
  },

  // Enable static site generation
  ssr: true
})