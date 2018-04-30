import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

const store = () =>
  new Vuex.Store({
    // global variables
    state: {
      // shared-saved variables in view session
      isIE11: false,
      isOutdatedBrowser: false,
      locales: ['en'],
      locale: 'en',
      settings: {},
      token: ''
    },
    mutations,
    actions
  })

export default store
