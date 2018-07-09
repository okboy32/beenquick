import Vue from 'vue'
import axios from 'axios'

// 全局状态控制引入
import store from '../store'

import router from '../router'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.userInfo.token) {
      config.header.Authorization = `JWT ${store.state.userInfo.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

axios.interceptors.request.use(
  undefined,
  error => {
    let res = error.response
    switch (res.status) {
      case 401:
        console.log('未登录')
        break
      case 403:
        console.log('美元操作权限')
        break
      case 500:
        console.log('服务器错误')
    }
    return Promise.reject(error.response.data)
  })
