export default {
  detectIE11(state) {
    if (process.browser) {
      state.isIE11 = !!window.MSInputMethodContext && !!document.documentMode
    }
  },
  outdatedBrowser(state, bool) {
    state.isOutdatedBrowser = bool
  },
  setSettings(state, settings) {
    state.settings = settings
  },
  setServices(state, services) {
    state.services = services
  }
}