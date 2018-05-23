import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})


export default router


