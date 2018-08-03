import cookie from '../../static/js/cookie'

export default {
  changeProducts (state, products) {
    const id = state.currentid
    if (state.products[id] === undefined) {
      state.products[id] = products
    }
  },
  changeCity: function (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  },
  changeCurrentId: function (state, id) {
    state.currentid = id
  },
  changeSearchHistory: function (state, keyword) {
    const index = state.searchHisory.indexOf(keyword)
    if (index !== -1) {
      state.searchHisory.splice(index, keyword)
    }
    const temp = [keyword]
    for (var i = 0; i < state.searchHisory.length; i++) {
      if (state.searchHisory[i] !== keyword) {
        temp.push(state.searchHisory[i])
      }
    }
    state.searchHisory = temp
    localStorage.searchHisory = temp
  },
  changeShopCart: function (state, product) {
    const id = product.product
    const pcount = product.count
    state.shopcart[id] = pcount
    localStorage.shopcart = JSON.stringify(state.shopcart)
  },
  setShopCart: function (state, shopcart) {
    localStorage.shopcart = JSON.stringify(shopcart)
    state.shopcart = shopcart
    let totalCount = 0
    for (var key in state.shopcart) {
      totalCount += state.shopcart[key]
    }
    state.totalCount = totalCount
  },
  setUserInfo: function (state) {
    state.userInfo.token = cookie.getCookie('token')
    state.userInfo.uid = cookie.getCookie('uid')
    state.userInfo.username = cookie.getCookie('username')
    state.userInfo.level = cookie.getCookie('level')
    state.userInfo.mobile = cookie.getCookie('mobile')
    console.info(state.userInfo)
  },
  getTotalcount: function (state) {
    let totalCount = 0
    for (var key in state.shopcart) {
      totalCount += state.shopcart[key]
    }
    state.totalCount = totalCount
  },
  clearHistory: function (state) {
    localStorage.searchHisory = []
    state.searchHisory = []
  }
}
