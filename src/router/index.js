import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProfileTeacher from '@/components/ProfileTeacher'
import ProfileStudent from '@/components/ProfileStudent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile-teacher',
    name: 'profile-teacher',
    component: ProfileTeacher
  },
  {
    path: '/profile-student',
    name: 'profile-student',
    component: ProfileStudent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
