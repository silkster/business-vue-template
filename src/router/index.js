import { createRouter, createWebHistory } from 'vue-router';
import Contact from '@/views/Contact.vue';
import Culture from '@/views/Culture.vue';
import Home from '@/views/Home.vue';
import InProgress from '@/views/InProgress.vue';
import Team from '@/views/Team.vue';
import Work from '@/views/Work.vue';
import namedRoutes from './namedRoutes.js';

export const routes = [
  {
    ...namedRoutes.home,
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    ...namedRoutes.work,
    component: Work,
  },
  {
    ...namedRoutes.wip,
    component: InProgress,
  },
  {
    ...namedRoutes.culture,
    component: Culture,
  },
  {
    ...namedRoutes.team,
    component: Team,
  },
  {
    ...namedRoutes.contact,
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
