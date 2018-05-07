import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import comment from '@/components/ydt_comment/ydt_comment'
import ceshi from '@/components/ceshi/ceshi'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'comment',
      component: comment
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    }
  ]
})
