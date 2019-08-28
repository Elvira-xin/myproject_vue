import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from '@/router/router.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'

Vue.use(ElementUI)

Vue.use(VueRouter)
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return routerPush.call(this, location).catch(error => error)
// }

router.beforeEach((to, from, next) => {
  console.log(to)
  let mytoken = localStorage.getItem('myproject_vue')
  if (mytoken || to.path === '/login') {
    next()
  } else {
    next({
      path: '/login'
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
