
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Laffe Trans',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Firma świadcząca wiele usług związanych z transportem. Między innymi: transport, lawety, pomoc drogowa. Zapraszamy na naszą stronę!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'aos/dist/aos.css'
  ],
  plugins: [
    {
      src: '~/plugins/aos',
      ssr: false
    }
  ],
  buildModules: [
  ],
  modules: [
  ],
  build: {
    extend (config, ctx) {
    },
    vendors: ['aos']
  }
}
