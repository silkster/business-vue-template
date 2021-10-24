<script>
export default {
  name: 'app-content',
  props: {
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    containerClasses() {
      const { $style, isFullWidth } = this;
      return {
        [$style.container]: true,
        [$style.fullWidth]: isFullWidth,
      };
    },
  },
};
</script>

<template>
  <div :class="containerClasses">
    <slot></slot>
  </div>
</template>

<style module>
.container {
  position: relative;
  max-width: 1024px;
  margin: 60px auto;
  min-height: 500px;
  text-align: center;
}
.fullWidth {
  max-width: unset;
}
</style>
