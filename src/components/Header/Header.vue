<script>
import logoSrc from '@/assets/logo.png';
import namedRoutes from '@/router/namedRoutes.js';
import AppMenu from '@/components/Menu/Menu.vue';

export default {
  name: 'app-header',
  components: { AppMenu },
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
        [$style.fixed]: isFixed,
        [$style.white]: isWhite,
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
          <img
            :src="logoSrc"
            alt="Kohlmark Flach logo"
            aria-label="Kohlmark Flach logo"
            height="250"
            width="190"
          />
        </div>
      </div>
      <app-menu />
    </div>
  </header>
</template>

<style module>
header {
  padding: 0 72px 0 100px;
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
  padding: 0;
}
.logoWrap {
  position: relative;
  width: 200px;
  height: 175px;
}
.logo {
  padding: 0px;
  background: var(--white);
  position: absolute;
  top: 100px;
  width: 190px;
  z-index: 1000;
  overflow: hidden;
  height: 255px;
}
.logo svg {
  width: 100%;
  height: 100%;
}
.logoSmall {
  height: 145px;
}
</style>
