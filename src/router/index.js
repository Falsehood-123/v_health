import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import( '../pages/index.vue' )
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: () => import( '../pages/recipe/index.vue' )
  },
  {
    path: '/dynomic',
    name: 'Dynomic',
    component: () => import( '../pages/dynomic/index.vue' )
  },
  {
    path: '/foods',
    name: 'Foods',
    component: () => import( '../pages/foods/index.vue' )
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import( '../pages/health/index.vue' )
  },
  {
    path: '/send/recipe',
    name: 'sendRecipe',
    component: () => import( '../pages/send/recipe.vue' )
  },
  {
    path: '/send/dynomic',
    name: 'sendDynomic',
    component: () => import( '../pages/send/dynomic.vue' )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
