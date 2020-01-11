import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import { Message } from 'element-ui'

export interface ResponseData {
  code: number;
  //可能存在 也可能不存在
  data?: any;
  message: string;
}

// 创建axios实例
let service: AxiosInstance | any
// 开发环境
if (process.env.NODE_ENV === 'development') {
  service = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
}else{
  service = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
}

// request 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    console.log('error', error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200){
      const data: ResponseData = res.data
      if (data.code === 0) {
        Message({
          message: data.message,
          type: 'success'
        })
        return data.data
      } else {
        Message({
          message: data.message,
          type: 'error'
        })
      }
    }
    else {
      Message({
        message: '网络请求失败 请重试',
        type: 'error'
      })
      return Promise.reject(new Error(res.data.message || 'Error'))
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service;