import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/components/cv/HomeCv.vue') },
  { path: '/portfolio-1', component: () => import('@/components/cv/views/portfolio1.vue') },
  //{ path: '/portfolio-2', component: () => import('@/components/cv/views/portfolio2.vue') },
  //{ path: '/portfolio-3', component: () => import('@/components/cv/views/portfolio3.vue') },
  { path: '/blog-post-1', component: () => import('@/components/cv/views/blogPost1.vue') },
  //{ path: '/contact', component: () => import('@/components/cv/views/ContactView.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})