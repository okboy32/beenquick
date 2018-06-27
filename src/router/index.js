import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Shopcart from '@/pages/shopcart/Shopcart'
import Market from '@/pages/market/Market'
import Mine from '@/pages/mine/Mine'
import Search from '@/pages/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/market',
      name: 'Market',
      component: Market
    }, {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
