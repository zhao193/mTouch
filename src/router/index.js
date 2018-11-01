import Vue from 'vue'
import Router from 'vue-router'
import poster from '@/views/poster'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'poster',
      component: poster
    }
  ]
})
