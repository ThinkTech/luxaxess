export default {
  async nuxtServerInit({ commit, state }) {
    const { default: settings } = await import('~/content/settings.json')
    commit('setSettings', settings)
    const context = require.context('~/content/services/', false, /\.json$/)
    const services = context.keys().map(key => ({
      ...context(key),
      _path: `/services/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('setServices', services)
  }
}
