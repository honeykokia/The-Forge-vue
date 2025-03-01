import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/home/About.vue'
import Skill from '@/views/home/Skill.vue'
import Project from '@/views/home/Project.vue'
import Home from '@/views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // 平滑滾動
      };
    }
    return { top: 0 };
  }
})

export default router
