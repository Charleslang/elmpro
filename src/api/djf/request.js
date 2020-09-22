import Axios from 'axios'

export function request(config) {
  const axios = Axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 5000
  })

  // 拦截请求
  axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    console.log('request.js ->' + token)
    if (token != null && token != '') {
      // 请求头添加 token
      config.headers['token'] = token
    }
    return config
  }, err => {
    console.error(err)
  })

  // 拦截响应
  axios.interceptors.response.use(result => {
    if (result.data.code === 401 || result.data.code === 803) {
      console.log('清除token')
      localStorage.removeItem('token')
    }
    return result.data
  }, error => {
    console.error(error)
  })

  return axios(config)  
}