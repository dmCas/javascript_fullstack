import Vue from 'vue'   //引入Vue
import Router from 'vue-router' //引入vue-router
import HelloWorld from '@/components/HelloWorld' //引入根目录下的Hello.vue组件
import Login from '@/components/Login'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Mine2 from '@/components/Mine2'


Vue.use(Router) //Vue全局使用Router

export default new Router({
  routes: [  //配置路由，这里是个数组
    {        //每一个链接都是一个对象
      path: '/',     //链接路径
      name: 'HelloWorld',   
      component: HelloWorld
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/mine',
      name: 'mine',
      component: Mine,
      children: [
        {
          path: 'mine2',
          name: 'mine2',
          component: Mine2
        }
      ]
    },
    {
      path:'/detail',
      component: Detail
    }
  ]
})
