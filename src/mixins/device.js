import config from '@/config';
import viewport from '@/util/modules/viewport';
import { mapMutations, mapState } from 'vuex';

const { isScreenWidthInRange, getScreenSize } = viewport;

const { breakpoints } = config.viewport;

export default {
  computed: {
    ...mapState('device', [
      'isDesktop',
      'isLarge',
      'isMobile',
      'isSmall',
      'isTablet',
      'isTabletLandscape',
      'screen',
    ]),
  },
  created() {
    this.setScreenSize();
    window.addEventListener('resize', this.setScreenSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.setScreenSize);
  },
  watch: {
    screen: {
      immediate: true,
      handler(screen) {
        this.checkViewport(screen);
      },
    },
  },
  methods: {
    ...mapMutations('device', [
      'setIsDesktop',
      'setIsLarge',
      'setIsMobile',
      'setIsSmall',
      'setIsTablet',
      'setIsTabletLandscape',
      'setScreen',
    ]),
    checkViewport(screen) {
      if (!screen) {
        return;
      }
      const { height, width } = screen;
      const { min, mobile, tablet, desktop, max } = breakpoints;
      const [isMinScreen, isMobile, isTablet, isDesktop, isMaxScreen] = [
        isScreenWidthInRange(0, min),
        isScreenWidthInRange(mobile.min, mobile.max),
        isScreenWidthInRange(tablet.min, tablet.max),
        isScreenWidthInRange(desktop.min, desktop.max),
        isScreenWidthInRange(max, Infinity),
      ];
      this.setIsSmall(isMinScreen);
      this.setIsMobile(isMobile);
      this.setIsTablet(isTablet && width < height);
      this.setIsTabletLandscape(isTablet && width > height);
      this.setIsDesktop(isDesktop);
      this.setIsLarge(isMaxScreen);
    },
    setScreenSize() {
      this.setScreen(getScreenSize());
    },
  },
};
