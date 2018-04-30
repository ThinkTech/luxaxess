export default {
  async nuxtServerInit({ commit, state }) {
    const { default: settings } = await import('~/content/settings.json')
    commit('setSettings', settings)
    const context = require.context('~/content/blog/posts/', false, /\.json$/)
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('setServices', posts)
  }
}
