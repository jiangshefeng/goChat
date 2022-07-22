import NProgress from 'nprogress'
import axios from './axios'

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  put<T>(url: string, params?: unknown): Promise<ResType<T>>
  del<T>(url: string, params?: unknown): Promise<ResType<T>>
}

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .put(url, params)
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  del(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .delete(url, { data: params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  }
}

export default http
