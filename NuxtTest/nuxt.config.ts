// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    rootAttrs: {
      class: 'appframe'
    }
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
          `
        }
      }
    }
  }
})