import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/member/LoginView.vue'
import TheForge from '@/views/home/TheForge.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheForge,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router
