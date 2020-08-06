import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Summary.vue')
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "about" */ '../views/Summary.vue')
  },
  {
    path: '/runcontrol',
    name: 'Run Control',
    component: () => import(/* webpackChunkName: "about" */ '../views/RunControl.vue')
  },
  {
    path: '/logs',
    name: 'Logs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logs.vue')
  },
  {
    path: '/commands',
    name: 'Commands',
    component: () => import(/* webpackChunkName: "about" */ '../views/Commands.vue')
  },
  {
  path: '*',
  name: '404',
  component: () => import(/* webpackChunkName: "about" */ '../views/Page404.vue')
},
{
  path: '/febcontrol',
  name: 'FEB Control',
  component: () => import(/* webpackChunkName: "about" */ '../views/FEBControl.vue')
},
]

const router = new VueRouter({
  routes
})

export default router
