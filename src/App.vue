<script>
import AppHeader from '@/components/Header/Header.vue';
import AppFooter from '@/components/Footer/Footer.vue';

export default {
  name: 'app',

  components: { AppHeader, AppFooter },

  props: {
    user: {
      type: Object,
    },
  },

  computed: {
    isFixed() {
      const { $router } = this;
      return $router.currentRoute.value.meta.header === 'fixed';
    },
    logoSize() {
      const { $router } = this;
      const { meta } = $router.currentRoute.value || null;
      return (meta && meta.logo) || null;
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
<template>
  <app-header :is-fixed="isFixed" :logo-size="logoSize" />

  <router-view />

  <app-footer />
</template>

<style lang="scss" module>
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
