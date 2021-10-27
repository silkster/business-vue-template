<script>
// import AppContent from '@/components/Content/Content.vue';
import AppGallery from '@/components/Gallery/Gallery.vue';

export default {
  name: 'Work',
  components: {
    // AppContent,
    AppGallery,
  },
};
</script>

<template>
  <div :class="$style.container">
    <app-gallery />
  </div>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
}
.container {
  position: relative;
}
</style>
