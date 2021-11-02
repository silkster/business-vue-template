import { createStore } from 'vuex';
import { viewport } from '@/util';
import portfolio from './modules/portfolio';
import team from './modules/team';

const $app = document.getElementById('app');
const appHeight = ($app && $app.offsetHeight) || 0;

// const vh = Math.max(
//   document.documentElement.clientHeight || 0,
//   window.innerHeight || 0,
// );

export default createStore({
  namespaced: true,
  state: {
    appHeight,
    viewport: viewport.getScreenSize(),
  },
  mutations: {
    setAppHeight(state, height) {
      state.appHeight = height;
    },
    setViewport(state, viewport) {
      state.viewport = viewport;
    },
  },
  actions: {},
  modules: {
    portfolio,
    team,
  },
});
