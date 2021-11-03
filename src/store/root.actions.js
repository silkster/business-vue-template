import { viewport } from '@/util';

export default {
  updateViewport({ commit }) {
    commit('setViewport', viewport.getScreenSize());
  },
};
