import { createRouter, createWebHistory } from 'vue-router'
import TheForge from '@/views/home/TheForge.vue'
import About from '@/views/home/About.vue'
import Skill from '@/views/home/Skill.vue'
import Project from '@/views/home/Project.vue'

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
    {path: '/skill',
      name: 'skill',
      component: Skill,
    },
    {path: '/project',
      name: 'project',
      component: Project,
    }
  ],
})

export default router
