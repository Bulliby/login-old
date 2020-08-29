import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login.vue'
import signup from '@/signup.vue'
import forgot from '@/forgot-password.vue'
import verify from '@/verify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: login,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/forgot-password',
      name: 'forgot',
      component: forgot,
    },
    {
      path: '/verify',
      name: 'verify-mail',
      component: verify,
    },
  ]
})

