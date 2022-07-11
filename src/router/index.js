import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/index.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/Post/index.vue')
    },
    { path: '/:pathMatch(.*)*', 
      component:() => import('../views/404.vue')
    },
  ]
})

export default router
