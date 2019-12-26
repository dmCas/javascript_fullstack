import Vue from 'vue'
import Router from 'vue-router'
// import A from '@/components/A'
import Show from '@/components/form表单组件/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    }
  ]
})
