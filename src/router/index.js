import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Project from '../components/project.vue'
import Tracker from '../components/tracker.vue'
import Expect from '../components/expect.vue'
import Reflect from '../components/reflect.vue'
import Journal from '../components/journal.vue'

import jan from '../month/jan.vue'
import feb from '../month/fab.vue'
import mar from '../month/mar.vue'
import apr from '../month/apr.vue'
import may from '../month/may.vue'
import jun from '../month/jun.vue'
import jul from '../month/jul.vue'
import aug from '../month/aug.vue'
import sep from '../month/sep.vue'
import oct from '../month/oct.vue'
import nov from '../month/nov.vue'
import dec from '../month/dec.vue'

const routes = [
  { path: "/project", component: Project },
  { path: "/tracker", component: Tracker },
  { path: "/expect", component: Expect },
  { path: "/reflect", component: Reflect },
  { path: "/journal", component: Journal },
  { path: "/jan", component: jan },
  { path: "/feb", component: feb },
  { path: "/mar", component: mar },
  { path: "/apr", component: apr },
  { path: "/may", component: may },
  { path: "/jun", component: jun },
  { path: "/jul", component: jul },
  { path: "/aug", component: aug },
  { path: "/sep", component: sep },
  { path: "/oct", component: oct },
  { path: "/nov", component: nov },
  { path: "/dec", component: dec },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})


export default router;
