import * as types from './mutation-types'
const mutations = {
  [types.SET_TEST] (state, test) {
    state.test = test
  },
  [types.SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
export default mutations
