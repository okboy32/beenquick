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
  }
}
