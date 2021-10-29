import config from '@/config';

const DEFAULT_MOBILE_BREAKPOINT = config.viewport.breakpoints.tablet.min;

export const getScreenSize = () => {
  return {
    width:
      Math.max(document.documentElement.clientWidth) || window.innerWidth || 0,
    height:
      Math.max(document.documentElement.clientHeight) ||
      window.innerHeight ||
      0,
  };
};

export const getScreenWidth = () => {
  return getScreenSize().width;
};

export const isMobile = (breakpoint = DEFAULT_MOBILE_BREAKPOINT) => {
  const width = getScreenWidth();
  return width <= breakpoint ? true : false;
};

export const isDesktop = (breakpoint = DEFAULT_MOBILE_BREAKPOINT) => {
  return !isMobile(breakpoint);
};

export const isScreenWidthInRange = (min, max) => {
  const width = getScreenWidth();
  return width >= min && width <= max;
};

export default {
  getScreenSize,
  getScreenWidth,
  isMobile,
  isDesktop,
  isScreenWidthInRange,
};
