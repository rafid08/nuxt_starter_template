// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/theme.css",
  ],
  app: {
    head: {
      title: "Nuxt Tailwind Starter",
      link: [
        // { rel: 'icon', hid: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'icon', type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
        // { rel: 'icon', type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel:"manifest", href:"/site.webmanifest" },
        // { rel: 'apple-touch-icon', sizes:"180x180", href: '/apple-touch-icon.png' },
        { rel: "preconnect", href: "https://fonts.gstatic.com"},
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap'
        }
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})
