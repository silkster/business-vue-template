import config from '@/config';
import viewport from '@/util/modules/viewport';

const { isScreenWidthInRange, getScreenSize } = viewport;

const { breakpoints } = config.viewport;

export default {
  data() {
    return {
      device: {
        isSmall: null,
        isMobile: null,
        isTablet: null,
        isTabletLandscape: null,
        isDesktop: null,
        isLarge: null,
      },
    };
  },
  created() {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);
  },
  destroyed() {
    window.removeEventListener('resize', this.checkViewport);
  },
  methods: {
    checkViewport() {
      this.setScreenSize();
      const { height, width } = this.device.screen;
      const { min, mobile, tablet, desktop, max } = breakpoints;
      const [isMinScreen, isMobile, isTablet, isDesktop, isMaxScreen] = [
        isScreenWidthInRange(0, min),
        isScreenWidthInRange(mobile.min, mobile.max),
        isScreenWidthInRange(tablet.min, tablet.max),
        isScreenWidthInRange(desktop.min, desktop.max),
        isScreenWidthInRange(max, Infinity),
      ];
      this.device.isSmall = isMinScreen;
      this.device.isMobile = isMobile;
      this.device.isTablet = isTablet;
      this.device.isTabletLandscape = isTablet && width > height;
      this.device.isDesktop = isDesktop;
      this.device.isLarge = isMaxScreen;
    },
    setScreenSize() {
      this.device.screen = getScreenSize();
    },
  },
};
