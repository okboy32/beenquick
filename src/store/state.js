let defaultSearchHistory = []
try {
  if (localStorage.searchHisory) {
    defaultSearchHistory = localStorage.searchHisory.split(',')
    console.info(typeof Array(defaultSearchHistory))
  }
} catch (e) {}

let shopcart = JSON.parse('{}')
try {
  if (localStorage.shopcart) {
    console.info(localStorage.shopcart)
    shopcart = JSON.parse(localStorage.shopcart)
  }
} catch (e) {
  console.info(localStorage.shopcart)
}

export default {
  products: {},
  city: '',
  searchHisory: defaultSearchHistory,
  shopcart: shopcart,
  userInfo: Object
}
