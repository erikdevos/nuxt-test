export default defineNuxtConfig({
  ssr: process.env.NUXT_SSR === 'true',
  target: process.env.NUXT_TARGET || 'server', // Use 'static' for static deployment
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    rootAttrs: {
      class: 'appframe'
    },
    baseURL: '/nuxt-test/', // Replace <repository-name> with your repo name
  },
  css: ['~/assets/css/style.scss'],  // This is your global stylesheet
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Inject the variables and mixins globally into all SCSS files
          additionalData: `
            @use '~/assets/css/_variables.scss' as *;
            @use '~/assets/css/_mixins.scss' as *;
            @use 'sass:color' as color;  // Updated to ensure proper namespace
          `
        }
      }
    }
  }
})
