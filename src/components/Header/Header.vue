<script>
import logoSrc from '@/assets/logo.svg';
import namedRoutes from '@/router/namedRoutes.js';
import AppMenu from '@/components/Menu/Menu.vue';
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'app-header',
  components: { AppMenu, InlineSvg },
  props: {
    isFixed: {
      type: Boolean,
      default: true,
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
    logoSize: {
      type: String,
    },
  },
  data() {
    return {
      logoSrc,
    };
  },
  computed: {
    headerClasses() {
      const { $style, isFixed, isWhite } = this;
      return {
        ...(isFixed ? { [$style.fixed]: true } : {}),
        ...(isWhite ? { [$style.white]: true } : {}),
      };
    },
    logoClasses() {
      const { $style, logoSize } = this;
      return {
        [$style.logo]: true,
        [$style.logoSmall]: logoSize === 'small',
      };
    },
  },
  methods: {
    logoClick() {
      const { $router } = this;
      const { currentRoute } = $router;
      const { home } = namedRoutes;
      const isHome = currentRoute.value.name === home.name;
      if (!isHome) {
        $router.push(home.path);
      }
    },
  },
};
</script>

<template>
  <header :class="headerClasses">
    <div :class="$style.wrapper">
      <div :class="$style.logoWrap">
        <div :class="logoClasses" @click="logoClick">
          <inline-svg
            :src="logoSrc"
            alt="Kohlmark Flach logo"
            aria-label="Kohlmark Flach logo"
            height="239"
            width="179"
          />
        </div>
      </div>
      <app-menu />
    </div>
  </header>
</template>

<style module>
header {
  height: 176px;
}
.fixed {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.white {
  background-color: var(--white);
}
.wrapper {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0 72px 0 112px;
}
.logoWrap {
  position: relative;
  width: 200px;
  height: 176px;
}
.logo {
  align-items: center;
  background: var(--white);
  cursor: pointer;
  display: flex;
  height: 249px;
  justify-content: center;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  top: 106px;
  width: 189px;
  z-index: 1000;
}
.logo.logoSmall {
  height: 138px;
  align-items: flex-start;
  padding-top: 5px;
}
</style>
