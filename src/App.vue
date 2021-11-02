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
    meta() {
      return this.$router.currentRoute.value.meta || null;
    },
    isAbsolute() {
      const { meta } = this;
      return (meta && meta.header && meta.header.isAbsolute) || false;
    },
    isFixed() {
      const { meta } = this;
      return (meta && meta.header && meta.header.isFixed) || false;
    },
    isWhite() {
      const { meta } = this;
      return (meta && meta.header && meta.header.isWhite) || false;
    },
    logoSize() {
      const { meta } = this;
      return (meta && meta.logo) || null;
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
<template>
  <app-header
    :is-absolute="isAbsolute"
    :is-fixed="isFixed"
    :is-white="isWhite"
    :logo-size="logoSize"
  />

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
