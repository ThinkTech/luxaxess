export default {
  async nuxtServerInit({ commit, state }) {
    const { default: settings } = await import('~/content/settings.json')
    commit('setSettings', settings)
    let context = require.context('~/content/services/', false, /\.json$/)
    const services = context.keys().map(key => ({
      ...context(key),
      path: `/services/${key.replace('.json', '').replace('./', '')}`
    }))
    commit('setServices', services)
    context = require.context('~/content/activities/', false, /\.json$/)
    const activities = context.keys().map(key => ({
      ...context(key),
      path: `/activities/${key.replace('.json', '').replace('./', '')}`
    }))
    commit('setActivities', activities)
    context = require.context('~/content/products/', false, /\.json$/)
    const products = context.keys().map(key => ({
      ...context(key),
      path: `/products/${key.replace('.json', '').replace('./', '')}`
    }))
    commit('setProducts', products)
  }
}
