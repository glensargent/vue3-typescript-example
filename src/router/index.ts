import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/browse',
      component: Browse
    }
  ]
})

export default router