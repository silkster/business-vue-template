<script>
import AppHeader from '@/components/Header/Header.vue';

export default {
  name: 'hero-page',

  components: { AppHeader },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
<template>
  <app-header :class="$style.appHeader" />

  <router-view />
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
.appHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>
