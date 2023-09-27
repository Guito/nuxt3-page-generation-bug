// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'pages:extend' (pages) {
      pages.push({
        name: 'test',
        path: '/test.html',
        file: '~/extra-pages/test.vue'
      })
    },
  },
  devtools: { enabled: true }
})
