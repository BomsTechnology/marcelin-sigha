// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/about/bt-logo.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/about/bt-logo.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/about/bt-logo.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/about/bt-logo.png' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
})
