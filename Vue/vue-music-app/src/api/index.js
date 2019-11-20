//node modules引入
import Vue from 'vue'
import axios from 'axios'

//new 一个Vue实例
const vue = new Vue()

// axios设置
// 超过10s则不再请求
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://loaclhost:3000'

// axios配置
// 判断返回状态,响应拦截
axios.interceptors.response.use((res) => {
  if(res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error)=>{
  alert('网络异常')
  return Promise.reject(error)
})

//抛出一个方法
export function fetchGet(url, param){
  return new Promise((resolve, reject) => {
    axios.get(url,{
      //分页
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
      
  })
}

export default {
  // 用户登录
  Login(params){
    return fetchGet('/login', params)
  },
  // banners 请求轮播图方法
  BannerList (){
    return fetchGet('/banner')
  },
  DiscLists (params) {
    return fetchGet('/top/playlist', params)
  }
}