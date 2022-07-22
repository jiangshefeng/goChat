//http.ts
import axios, { AxiosRequestConfig } from 'axios'

let baseURL = ''
if (location.hostname !== 'localhost' && location.hostname !== '10.6.4.240') {
  baseURL = ''
} else {
  baseURL = import.meta.env.VITE_REQUEST_BASE_URL
}

// 创建axios实例
const service = axios.create({
  baseURL,
  withCredentials: false
})

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token: string | null = localStorage.getItem('token')

    if (token) {
      if (config.headers) {
        config.headers['authorization'] = token
      } else {
        config.headers = {
          Authorization: token
        }
      }
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (res) => {
    if (res.data.code === 111) {
      localStorage.setItem('token', '')
      // token过期操作
    }
    return res
  },
  (err) => {
    err.message = '请求失败！'
    location.href = '/login'
    return Promise.reject(err)
  }
)

export default service
