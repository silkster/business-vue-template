import { viewport } from '@/util';

const $app = document.getElementById('app');
const appHeight = ($app && $app.offsetHeight) || 0;

export default {
  appHeight,
  viewport: viewport.getScreenSize(),
  fontScale: 100,
};
