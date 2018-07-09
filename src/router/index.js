import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Shopcart from '@/pages/shopcart/Shopcart'
import Market from '@/pages/market/Market'
import Mine from '@/pages/mine/Mine'
import Search from '@/pages/search/search'
import Login from '@/pages/login/Login'
import Detail from '@/pages/detail/Detail'
import cookie from '../../static/js/cookie'
import store from '../store'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '主页',
        need_log: false
      }
    }, {
      path: '/market',
      name: 'Market',
      component: Market,
      meta: {
        title: '闪购超市',
        need_log: false
      }
    }, {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart,
      meta: {
        title: '购物车',
        need_log: true
      }
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        title: '我的',
        need_log: true
      }
    }, {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: '搜索',
        need_log: false
      }
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登陆',
        need_log: false
      }
    }, {
      path: '/detail/:id',
      props: true,
      name: 'Detail',
      component: Detail,
      meta: {
        title: '商品详情',
        need_log: false
      }
    }
  ]
})

// 进行路由判断
router.beforeEach((to, from, next) => {
  var nextPath = cookie.getCookie('nextPath')
  console.log(nextPath)
  if (to !== undefined) {
    if (to.meta.need_log) {
      console.info(to.meta.need_log)
      if (!store.state.userInfo.token) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    }
  }
  next()
})
export default router
