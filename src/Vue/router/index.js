import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login.vue'
import home from '@/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

