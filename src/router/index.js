import Vue from 'vue'
import Router from 'vue-router'
import {pathConfig} from './config.js'
import store from '../store'

Vue.use(Router)

const router = new Router({
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
      redirect: '/system/index',
      component: resolve => { require(['@/views/index'], resolve) },
      children: pathConfig
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('=====' + to.path + '====id:' + store.state.userInfo.merchantId)
  // 判断是否已经登录
  if (store.state.userInfo.merchantId) {
    console.log('already login')
    next()
  } else if (to.name === 'login') {
    console.log('this is login')
    next()
  } else {
    console.log('to login')
    router.replace('/')
    next()
  }
})
export default router
