import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
export default new Vue.Store({
    state: {
        test: ''
    },
    getters: {
        test: state => state.test
    },
    mutations: {
        SET_TEST(state, test) {
            state.test = test
        }
    },
    actions: {}
})
