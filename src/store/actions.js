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
  },
  setUserInfo: function (ctx) {
    console.info('setUserInfo')
    ctx.commit('setUserInfo')
  }
}
