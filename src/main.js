// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import store from './store'
import Notification from './components/notification'

// 全局加载resource拦截器
import './axios/'
import Axios from 'axios'
Vue.prototype.$http = Axios

Vue.use(Notification)
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
