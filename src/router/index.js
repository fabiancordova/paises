import Vue from 'vue'
import VueRouter from 'vue-router'
import Continente from '../views/Continente.vue'
import Homepage from '../views/Homepage.vue'
import Notfound from '../views/Notfound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/continente',
    name: 'Continente',
    component: Continente
  },
  {
    path: '/pais',
    name: 'Pais',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pais" */ '../views/Pais.vue')
  },
  {
    path: '/404',
    name: '404',
    component: Notfound
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
