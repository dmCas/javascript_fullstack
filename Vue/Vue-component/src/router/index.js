import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/A'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'A',
      component: A
    }
  ]
})
