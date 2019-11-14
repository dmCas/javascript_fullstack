import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
// js 懒加载
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/page/city/City')
    }
  ]
})
