import Vue from 'Vue'
import Vuex from 'Vuex'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    test: '2'
  },
  getters: {
    test: state => state.test
  },
  mutations: {
    SET_TEST (state, test) {
      state.test = test
    }
  },
  actions: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
