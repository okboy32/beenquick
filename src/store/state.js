let defaultSearchHistory = []
try {
  if (localStorage.searchHisory) {
    defaultSearchHistory = localStorage.searchHisory.split(',')
    console.info(typeof Array(defaultSearchHistory))
  }
} catch (e) {}

export default {
  products: {},
  city: '',
  searchHisory: defaultSearchHistory
}
