import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
// import Abc from '@/views/123.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/',
      redirect: 'login'
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
})
