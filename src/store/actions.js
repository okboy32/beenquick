export default {
  changeProducts: function (ctx, products) {
    ctx.commit('changeProducts', products)
  },
  changeCity: function (ctx, city) {
    ctx.commit('changeCity', city)
  },
  changeCurrentId: function (ctx, id) {
    ctx.commit('changeCurrentId', id)
  },
  changeSearchHistory: function (ctx, keyword) {
    ctx.commit('changeSearchHistory', keyword)
  },
  changeShopCart: function (ctx, product) {
    ctx.commit('changeShopCart', product)
    ctx.commit('getTotalcount')
  },
  setUserInfo: function (ctx) {
    ctx.commit('setUserInfo')
  },
  clearHistory: function (ctx) {
    ctx.commit('clearHistory')
  },
  setShopCart: function (ctx, shopcart) {
    ctx.commit('setShopCart', shopcart)
  },
  getTotalcount: function (ctx) {
    ctx.commit('getTotalcount')
  }
}
