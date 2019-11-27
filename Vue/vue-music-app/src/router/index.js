import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/pages/search'
import Playlist from '@/components/pages/playlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path:'/search',
      name: 'Search',
      component: Search
    },
    {
      path:'/playlist',
      name: 'Playlist',
      component: Playlist
    }
  ]
})
