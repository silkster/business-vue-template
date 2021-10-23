<script>
import logoSrc from '@/assets/logo.png';
import namedRoutes from '@/router/namedRoutes.js';
import AppMenu from '@/components/Menu/Menu.vue';

export default {
  name: 'app-header',
  components: { AppMenu },
  data() {
    return {
      logoSrc,
    };
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
  <header>
    <div :class="$style.wrapper">
      <div :class="$style.logo" @click="logoClick">
        <img :src="logoSrc" />
      </div>
      <div :class="$style.menuWrap">
        <app-menu />
      </div>
    </div>
  </header>
</template>

<style module>
.wrapper {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.logo {
  padding: 15px 20px;
}
h1 {
  display: inline-block;
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  margin: 6px 0 6px 10px;
  vertical-align: top;
}
.menuWrap {
  flex-basis: 230px;
  align-self: right;
  height: 385px;
}
</style>
