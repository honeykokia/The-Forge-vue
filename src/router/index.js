import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/member/LoginView.vue'
import TheFouge from '@/views/home/TheFouge.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheFouge,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router
