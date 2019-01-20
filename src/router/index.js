import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => { require(['@/views/login'], resolve) }
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => { require(['@/views/index'], resolve) },
      children: [{
        path: '/index/system',
        name: 'system',
        component: resolve => { require(['@/views/index/system'], resolve) }
      }]
    }
  ]
})
