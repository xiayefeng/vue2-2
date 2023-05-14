import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HomeCom',
      component: () => import('@/views/HomeCom.vue')
    }
  ]
})

export default router