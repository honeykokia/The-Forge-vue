import { createRouter, createWebHistory } from 'vue-router'
import TheForge from '@/views/home/TheForge.vue'
import About from '@/views/home/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheForge,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
