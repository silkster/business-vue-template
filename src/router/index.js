import { createRouter, createWebHistory } from 'vue-router';
import Contact from '@/views/Contact.vue';
import Culture from '@/views/Culture.vue';
import Home from '@/views/Home.vue';
import InProgress from '@/views/InProgress.vue';
import Team from '@/views/Team.vue';
import Work from '@/views/Work.vue';
import WorkAsh from '@/views/work/Ash.vue';
import WorkBhu from '@/views/work/Bhu.vue';
import WorkDav from '@/views/work/Dav.vue';
import WorkDeu from '@/views/work/Deu.vue';
import WorkKuz from '@/views/work/Kuz.vue';
import WorkLay from '@/views/work/Lay.vue';
import WorkLoe from '@/views/work/Loe.vue';
import WorkLyn from '@/views/work/Lyn.vue';
import WorkMil from '@/views/work/Mil.vue';
import WorkPar from '@/views/work/Par.vue';
import WorkSto from '@/views/work/Sto.vue';
import WorkWri from '@/views/work/Wri.vue';

import namedRoutes from './namedRoutes.js';

export const routes = [
  {
    ...namedRoutes.home,
    component: Home,
    meta: {
      header: 'fixed',
    },
  },
  {
    ...namedRoutes.work,
    component: Work,
    meta: {
      logo: 'small',
    },
  },
  {
    name: 'deu',
    path: '/work/deu',
    component: WorkDeu,
    meta: {
      title: 'Barn Transformation',
      location: 'Charlottesville, VA',
      photography: 'Alexander Nicholson',
      id: 'DEU',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'kuz',
    path: '/work/kuz',
    component: WorkKuz,
    meta: {
      title: 'Clifton Farmhouse',
      location: 'Clifton, VA',
      photography: 'Greg Hadley',
      id: 'KUZ',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'mil',
    path: '/work/mil',
    component: WorkMil,
    meta: {
      title: 'Milleens: Waterfront Timber Frame',
      location: 'Occoquan, VA',
      photography: 'Greg Hadley',
      id: 'MIL',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'lyn',
    path: '/work/lyn',
    component: WorkLyn,
    meta: {
      title: 'Craftsman Inspired Waterfront',
      location: 'Mason Neck, VA',
      photography: 'Greg Hadley',
      id: 'LYN',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'loe',
    path: '/work/loe',
    component: WorkLoe,
    meta: {
      title: 'Contemporary Solar Home',
      location: 'Potomac, MD',
      photography: 'Greg Hadley',
      editorial: 'Sharon Jaffe Dan',
      id: 'LOE',
      logo: 'small',
    },
  },
  {
    name: 'dav',
    path: '/work/dav',
    component: WorkDav,
    meta: {
      title: 'Deck House',
      location: 'Arlington, VA',
      photography: 'Michael Johnson, Mt. Carroll, IL',
      id: 'DAV',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'par',
    path: '/work/par',
    component: WorkPar,
    meta: {
      title: 'Farmhouse Transformation',
      location: 'Waterford, VA',
      photography: 'Greg Hadley',
      id: 'PAR',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'ash',
    path: '/work/ash',
    component: WorkAsh,
    meta: {
      title: 'Ashland Farm',
      location: 'Middleburg, VA',
      photography: 'Greg Hadley',
      id: 'ASH',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'lay',
    path: '/work/lay',
    component: WorkLay,
    meta: {
      title: 'Storybrook Cottage',
      location: 'Great Falls, VA',
      photography: 'Greg Hadley',
      id: 'LAY',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'wri',
    path: '/work/wri',
    component: WorkWri,
    meta: {
      title: 'Bridge House',
      location: 'Clifton, VA',
      photography: 'Greg Hadley',
      id: 'WRI',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'bhu',
    path: '/work/bhu',
    component: WorkBhu,
    meta: {
      title: 'Contemporary Pool House',
      location: 'Vienna, VA',
      photography: 'Greg Hadley',
      id: 'BHU',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    name: 'sto',
    path: '/work/sto',
    component: WorkSto,
    meta: {
      title: 'Shingle-Style Estate',
      location: 'Oakton, VA',
      photography: 'Maxine Schnitzer',
      editorial: 'Jennifer Sergent',
      id: 'STO',
      logo: 'small',
      header: 'fixed',
    },
  },
  {
    ...namedRoutes.wip,
    component: InProgress,
    meta: {
      logo: 'small',
    },
  },
  {
    ...namedRoutes.culture,
    component: Culture,
    meta: {
      logo: 'small',
    },
  },
  {
    ...namedRoutes.team,
    component: Team,
    meta: {
      logo: 'small',
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

export default router;
