import cookie from '../../static/js/cookie'
import axios from 'axios'
let defaultSearchHistory = []
try {
  if (localStorage.searchHisory) {
    defaultSearchHistory = localStorage.searchHisory.split(',')
  }
} catch (e) {}

let shopcart = JSON.parse('{}')
const token = cookie.getCookie('token')
if (token !== null) {
  console.info(token)
  axios.get('http://120.79.0.254/api/shopcart/',
    {
      headers: {
        'Authorization': 'JWT ' + token
      }
    }).then((response) => {
    const data = response.data
    for (var i = 0; i < data.length; i++) {
      shopcart[data[i].product.id] = data[i].count
    }
  }).catch((error) => {
    console.info(error)
  })
}
try {
  if (localStorage.shopcart) {
    shopcart = JSON.parse(localStorage.shopcart)
  }
} catch (e) {}

const userInfo = {
  username: cookie.getCookie('username') || '',
  level: cookie.getCookie('username') || '',
  uid: cookie.getCookie('username') || '',
  mobile: cookie.getCookie('username') || '',
  token: cookie.getCookie('token') || ''
}

let totalCount = 0
try {
  if (shopcart) {
    for (var key in shopcart) {
      totalCount += shopcart[key]
    }
  }
} catch (e) {}

export default {
  products: {},
  city: '',
  searchHisory: defaultSearchHistory,
  shopcart: shopcart,
  userInfo: userInfo,
  totalCount: totalCount
}
