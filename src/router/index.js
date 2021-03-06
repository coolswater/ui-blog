import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Home/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Index
    }
  ]
})
