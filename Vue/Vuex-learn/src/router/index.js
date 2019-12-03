import Vue from 'vue'
import Router from 'vue-router'
import Count from './../components/count'
import Dialog from './../components/dialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dialog',
      component:  Dialog
    },
  ]
})
