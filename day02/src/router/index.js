import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/find',
    component: () => import('../views/find.vue')
  },
  {
    path: '/shelf',
    component: () => import('../views/shelf.vue')
  },
  {
    path: '/story',
    component: () => import('../views/story.vue')
  },
  {
    path: '/my',
    component: () => import('../views/my.vue')
  },
  {
    path: '/search',
    component: () => import('../views/search.vue')
  },
  {
    path: '/detail',
    component: () => import('../views/detail.vue')
  },
  {
      path:'/',
      redirect:'/find'
  }
]

const router = new VueRouter({
    linkActiveClass:'active',
    routes
})

export default router
