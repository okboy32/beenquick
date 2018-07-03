export default {
  changeProducts: function (ctx, products) {
    ctx.commit('changeProducts', products)
  },
  changeCity: function (ctx, city) {
    ctx.commit('changeCity', city)
  },
  changeCurrentId: function (ctx, id) {
    ctx.commit('changeCurrentId', id)
  }
}
