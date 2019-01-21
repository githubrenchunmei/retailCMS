// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './http/index'
import ElementUI from 'element-ui'
import './theme/index.css'
import './common/stylus/index.styl'
import './common/icon-font/iconfont.css'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
