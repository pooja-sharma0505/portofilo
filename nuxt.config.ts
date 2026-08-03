export default defineNuxtConfig({
  compatibilityDate: '2026-07-20',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Pooja Sharma — Frontend Developer',
      meta: [
        { name: 'description', content: 'Frontend developer specializing in Nuxt.js and Vue — portfolio, projects, and resume.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap'
        }
      ]
    }
  }
})
