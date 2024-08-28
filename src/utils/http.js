import axios from 'axios'
import qs from 'qs'
import isPlainObject from 'lodash/isPlainObject'

var CryptoJS = require("crypto-js")
let baseURL = 'https://8au1srkna3.execute-api.eu-west-2.amazonaws.com/test/v2/'
// let baseURL = 'http://192.168.110.180:14000/'
// if (process.env.REACT_APP_ENV === 'development') {
//   baseURL = 'http://192.168.110.177:2000/'
// } else {
//   baseURL = 'https://hhtest.payzilla.io/'
// }


const http = axios.create({
  baseURL,
  timeout: 60000,
  method: 'get'
})
// 添加请求拦截器
http.interceptors.request.use((config) => {
  // console.log(config, 'config')
  // // config.headers.Appid = process.env.APP_ID
  // // const hmac = CryptoJS.HmacSHA256(config.data, process.env.´)
  console.log(process.env, 'process.env')
  if (config.method == 'post') {
    const hmac = CryptoJS.HmacSHA256(config.data, 'e984d9ea-e602-4707-a567-fc60a686cc4a')
    config.headers.Signature = hmac
  } else {
    const queryParams = Object.keys(config.params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(config.params[key])}`)
      .join('&')
    const hmac = CryptoJS.HmacSHA256(`${config.url}?${queryParams}`, 'e984d9ea-e602-4707-a567-fc60a686cc4a')
    config.headers.Signature = hmac
  }
  config.headers.Appid = 'caebb6ba-090a-4f48-9a9c-b84a1b6f8690'
  config.headers.Timestamp = new Date().getTime()
  var defaults = {}
  // 防止缓存，GET请求默认带_t参数
  if (config.method === 'get') {
    config.params = {
      ...config.params,
      ...{ '_t': new Date().getTime() }
    }
  }
  if (isPlainObject(config.params)) {
    config.params = {
      ...defaults,
      ...config.params
    }
  }
  if (isPlainObject(config.data)) {
    config.data = {
      ...defaults,
      ...config.data
    }
    if (/^application\/x-www-form-urlencoded/.test(config.headers['content-type'])) {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, (error) => {
  console.log(error, 'error1')
  return Promise.reject(error)
})

export { http }