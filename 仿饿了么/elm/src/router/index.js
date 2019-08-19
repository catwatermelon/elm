import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Goods from '@/pages/Goods'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path:'',
          redirect: '/goods'
        },
        {
          path: '/goods',
          name: 'goods',
          component: Goods
        }
      ]
    }
  ],
  mode: 'history'
})
