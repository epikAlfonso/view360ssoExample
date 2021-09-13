import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Auth from '../views/Auth.vue'
import Callback from '../views/Callback.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/callback',
    name: 'Callback',
    component:  Callback
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
