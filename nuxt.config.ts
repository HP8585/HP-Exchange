// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  app:{
    head:{
      link:[
        {rel:'stylesheet', href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"},
        {rel:'stylesheet', href:"https://fonts.googleapis.com/css?family=Poppins"}
      ]
    }
  },
 
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@pinia/nuxt', '@nuxtjs/i18n'],
  swiper:{
    modules: ['navigation', 'pagination', 'autoplay']
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n:{
    lazy: true,
    langDir: "locales",
    strategy: 'no_prefix',
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json"
      },
      {
        code: "fa-IR",
        iso: "fa-IR",
        name: "Farsi(IR)",
        file: "fa-IR.json"
      },
      {
        code: "ar-AR",
        iso: "ar-AR",
        name: "Arabic",
        file: "ar-AR.json"
      },
      {
        code: "hi-HI",
        iso: "hi-HI",
        name: "Hindi",
        file: "hi-HI.json"
      },
      {
        code: "ko-KO",
        iso: "ko-KO",
        name: "Korean",
        file: "ko-KO.json"
      },
      {
        code: "zh-CH",
        iso: "zh-CH",
        name: "Chinese",
        file: "zh-CH.json"
      },
    ],
    defaultLocale: "en-US"
  }
})
