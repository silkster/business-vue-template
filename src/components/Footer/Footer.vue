<script>
import logoSmallSvg from '@/assets/logo-sm.svg';
import aiaLogo from '@/assets/aia-logo.png';
import InlineSvg from 'vue-inline-svg';
import eventListenerMixin from '@/mixins/events';
import { mapState } from 'vuex';

export default {
  name: 'app-footer',
  components: { InlineSvg },
  mixins: [eventListenerMixin],
  data() {
    return {
      aiaLogo,
      logoSmallSvg,
      isInViewport: false,
      footerClasses: {},
      fontScale: 100,
    };
  },
  computed: {
    ...mapState(['route']),
    fontScaleStyle() {
      const { fontScale } = this;
      return {
        '--footer-font-scale': `${fontScale}%`,
      };
    },
  },
  created() {
    this.footerClasses = {
      [this.$style.container]: true,
    };
  },
  watch: {
    route: {
      immediate: true,
      handler() {
        this.isInViewport = this.isContainerInViewport();
      },
    },
    isInViewport() {
      this.updateFooterClasses();
    },
    screen: {
      immediate: true,
      handler() {
        this.setFontScale();
      },
    },
  },
  mounted() {
    const vm = this;
    vm.getContainerBottomPosition();
    vm.isInViewport = vm.isContainerInViewport();
    vm.$onResize(() => {
      vm.isInViewport = vm.isContainerInViewport();
    });
  },
  methods: {
    getContainerPosition() {
      return this.$refs.container.getBoundingClientRect();
    },
    getContainerBottomPosition() {
      const position = this.getContainerPosition();
      console.log('Footer Bounding: ', position);
      return position.bottom;
    },
    isContainerInViewport() {
      this.isInViewport = false;

      setTimeout(() => {
        const screen = this.getScreenSize();

        console.log('footer > screen size:', screen);

        return screen.height > this.getContainerBottomPosition();
      }, 100);
    },
    updateFooterClasses() {
      const { $style, isInViewport } = this;
      this.footerClasses = {
        [$style.container]: true,
        ...(isInViewport ? { [$style.fixed]: true } : {}),
      };
    },
    setFontScale() {
      const { screen } = this;
      const baseWidth = 1920;
      const baseScale = 100;
      if (screen.width < baseWidth) {
        const scale = (screen.width / baseWidth) * 100;
        this.fontScale = scale < 50 ? 50 : scale;
      } else {
        this.fontScale = baseScale;
      }
    },
  },
};
</script>

<template>
  <div ref="container"></div>
  <footer :class="footerClasses" :style="footerStyle">
    <div :class="$style.logo">
      <router-link to="/contact">
        <inline-svg
          :src="logoSmallSvg"
          alt="Contact Kohlmark Flach"
          aria-label="Contact Kohlmark Flach"
          height="65"
          width="90"
        />
      </router-link>
      <div :class="$style.companyName" :style="fontScaleStyle">
        <span :class="$style.company">
          <span :class="$style.kohlmark">KOHLMARK</span>
          <span :class="$style.flach"> FLACH</span></span
        >
        ARCHITECTS
      </div>
    </div>
    <div :class="$style.contactInfo" :style="fontScaleStyle">
      <span :class="$style.addressLine1">12644 Chapel Road</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.addressLine2">Suite 209</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.city">Clifton</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.state">Virginia</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.phone">703.932.2775</span>
    </div>

    <div :class="$style.aiaLogo" :style="fontScaleStyle">
      <a href="https://aia.org" target="blank">
        <img :src="aiaLogo" alt="Go to AIA website" />
      </a>
    </div>
  </footer>
</template>

<style module>
.container {
  align-items: center;
  box-sizing: border-box;
  background-color: var(--white);
  display: flex !important;
  height: 200px;
  justify-content: space-evenly;
  line-height: 1;
  padding: 0 3.75% 0 5.8333%;
  max-width: 100%;
  font-size: 24px;
  flex-direction: column;
}
.fixed {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
}
.companyName {
  color: var(--black);
  margin: 0 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: var(--footer-font-scale);
}
.kohlmark {
  color: var(--gray-dark);
}
.flach {
  font-weight: var(--font-weight-medium);
}
.contactInfo {
  color: var(--gray-dark);
  align-items: center;
  font-size: var(--footer-font-scale);
  line-height: 1.4;
  text-align: center;
}
.separator {
  font-size: 75%;
}
.addressLine1,
.addressLine2,
.city,
.state,
.phone {
  padding: 0 3px;
}
.phone {
  border-right: 0;
}
.aiaLogo {
  position: relative;
  width: 15%;
  display: flex;
  justify-content: flex-end;
  width: 35px;
  height: 35px;
}
.aiaLogo a {
  border: 0;
}
.aiaLogo img {
  max-width: 100%;
  max-height: 100%;
}
@media screen and (min-width: 984px) {
  .container {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .logo {
    flex-wrap: nowrap;
  }
  .contactInfo {
    display: flex;
    white-space: nowrap;
    text-align: inherit;
  }
  .company {
    white-space: nowrap;
  }
  .addressLine1,
  .addressLine2,
  .city,
  .state,
  .phone {
    padding: 0 18px;
  }
  .aiaLogo {
    width: 60px;
    height: 60px;
  }
}
</style>
