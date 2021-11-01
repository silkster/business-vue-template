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
    };
  },
  computed: {
    ...mapState(['route']),
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
  },
};
</script>

<template>
  <div ref="container"></div>
  <footer :class="footerClasses">
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
      <div :class="$style.companyName">
        <span :class="$style.company">
          <span :class="$style.kohlmark">KOHLMARK</span>
          <span :class="$style.flach"> FLACH</span></span
        >
        ARCHITECTS
      </div>
    </div>
    <div :class="$style.contactInfo">
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

    <div :class="$style.aiaLogo">
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
  flex-wrap: nowrap;
  height: 200px;
  justify-content: space-between;
  line-height: 1;
  padding: 0 112px;
  max-width: 100%;
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
  flex-wrap: nowrap;
  cursor: pointer;
  padding: 5px;
}
.companyName {
  color: var(--black);
  font-size: 24px;
  margin: 0 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.company {
  white-space: nowrap;
  font-size: 24px;
}
.kohlmark {
  color: var(--gray-dark);
}
.flach {
  font-weight: var(--font-weight-medium);
}
.contactInfo {
  display: flex;
  white-space: nowrap;
  color: var(--gray-dark);
  align-items: center;
}
.separator {
  font-size: 18px;
  font-weight: var(--font-weight-black);
}
.addressLine1,
.addressLine2,
.city,
.state,
.phone {
  padding: 0 18px;
  font-size: 24px;
}
.phone {
  border-right: 0;
}
.aiaLogo {
  position: relative;
  width: 15%;
  display: flex;
  justify-content: flex-end;
}
.aiaLogo a {
  border: 0;
}
</style>
