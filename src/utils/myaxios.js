import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
export default axios
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('itcast_manager')
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
