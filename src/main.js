import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from '@/router/router.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'

Vue.use(ElementUI)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
