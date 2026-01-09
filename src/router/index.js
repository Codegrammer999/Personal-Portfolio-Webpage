import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 120,
  minimum: 0.2,
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@/views/SkillsView.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/views/ProjectView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router