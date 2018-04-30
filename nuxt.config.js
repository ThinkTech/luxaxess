import glob from 'glob'
import path from 'path'

const getDynamicPaths = urlFilepathTable =>
  [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`)
    })
  )

const dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json'
})

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Luxaxes | Le luxe accessible',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#b68434' },
      {
        hid: 'description',
        name: 'description',
        content: 'Luxaxes all business center pour tous vos services.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Assets
  */
  //'@/assets/css/bootstrap-reboot.min.css',
  //'@/assets/css/bootstrap-grid.min.css',
  //  '@/assets/css/bootstrap.min.css',
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/font-awesome.css',
    '@/assets/css/carousel.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Route config for pre-rendering
  */
  generate: {
    routes: dynamicRoutes
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (
          to.matched.some(r => r.components.default.options.scrollToTop)
        ) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  /*
  ** Plugins section
  */
  plugins: [
    { src: '~/plugins/typeface', ssr: false },
    { src: '~/plugins/vue-agile', ssr: false },
    { src: '~/plugins/vue-mq', ssr: false },
    { src: '~/plugins/vue-custom-properties', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    cache: true,
    parralel: true,
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
