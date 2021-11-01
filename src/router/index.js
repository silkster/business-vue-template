import { createRouter, createWebHistory } from 'vue-router';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

import Team from '@/views/Team.vue';
import Bio from '@/views/Bio.vue';
import PresidentBio from '@/views/team/President.vue';
import VicePresidentBio from '@/views/team/VicePresident.vue';
import ArchitectBio from '@/views/team/Architect.vue';
import BusinessManagerBio from '@/views/team/BusinessManager.vue';
import Portfolio from '@/views/Portfolio.vue';
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import namedRoutes from './namedRoutes.js';

export const routes = [
  {
    ...namedRoutes.home,
    component: Home,
    meta: {
      header: { isFixed: true },
    },
  },
  {
    name: 'Portfolio',
    path: '/portfolio/:pagetype',
    component: Portfolio,
    props: true,
    meta: {
      logo: 'small',
      header: { isFixed: false, isWhite: true },
    },
    children: [
      {
        name: 'project',
        path: ':id-:slug',
        component: ProjectContent,
        props: true,
        meta: {
          logo: 'small',
          header: { isFixed: true, isWhite: false },
        },
      },
    ],
  },
  {
    ...namedRoutes.about,
    component: About,
    meta: {
      logo: 'small',
      header: {
        isFixed: false,
        isWhite: true,
      },
    },
  },
  {
    ...namedRoutes.team,
    component: Team,
    meta: {
      logo: 'small',
      header: {
        isFixed: false,
        isWhite: true,
      },
    },
    children: [
      {
        name: 'bio',
        path: ':title/:name',
        component: Bio,
        meta: {
          logo: 'small',
          header: {
            isWhite: true,
          },
        },
      },
    ],
  },
  {
    name: 'president',
    path: '/team/president',
    component: PresidentBio,
    meta: {
      logo: 'small',
      fullName: 'Tom Flach, AIA',
      title: 'President',
    },
  },
  {
    name: 'vice-president',
    path: '/team/vice-president',
    component: VicePresidentBio,
    meta: {
      logo: 'small',
      fullName: 'Jeremy Potter, AIA',
      title: 'Vice President',
    },
  },
  {
    name: 'architect',
    path: '/team/architect',
    component: ArchitectBio,
    meta: {
      logo: 'small',
      fullName: 'Chris Chatfield, AIA',
      title: 'Architect',
    },
  },
  {
    name: 'studio-manager',
    path: '/team/studio-manager',
    component: BusinessManagerBio,
    meta: {
      logo: 'small',
      fullName: 'Tracey Flach',
      title: 'Studio Manager',
    },
  },
  {
    ...namedRoutes.contact,
    component: Contact,
    meta: {
      logo: 'small',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

export default router;
