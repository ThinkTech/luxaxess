export default {
  async nuxtServerInit({ commit, state }) {
    const { default: settings } = await import('~/content/settings.json')
    commit('setSettings', settings)
    const {
      default: homeSettings
    } = await import('~/content/home-settings.json')
    commit('setHomeSettings', homeSettings)
    let context = require.context('~/content/services/', false, /\.json$/)
    const services = context.keys().map(file => ({
      ...context(file),
      path: `/services/${file.replace('.json', '').replace('./', '')}`
    }))
    commit('setServices', services)
    context = require.context('~/content/activities/', false, /\.json$/)
    const activities = context.keys().map(file => ({
      ...context(file),
      path: `/activites/${file.replace('.json', '').replace('./', '')}`
    }))
    commit('setActivities', activities)
    context = require.context('~/content/products/', false, /\.json$/)
    const products = context.keys().map(file => ({
      ...context(file),
      path: `/produits/${file.replace('.json', '').replace('./', '')}`
    }))
    commit('setProducts', products)
    context = require.context('~/content/cms/', false, /\.json$/)
    const cmsPages = context.keys().map(file => ({
      ...context(file),
      path: `/${file.replace('.json', '').replace('./', '')}`
    }))
    commit('setCmsPages', cmsPages)
  }
}
