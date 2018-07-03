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
    } catch (e) {}
  },
  changeCurrentId: function (state, id) {
    state.currentid = id
  }
}
