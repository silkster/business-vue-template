<script>
import AppContent from '@/components/Content/Content.vue';
export default {
  name: 'InProgress',
  components: {
    AppContent,
  },
};
</script>

<template>
  <app-content :class="$style.content">
    <div :class="$style.container">
      <div>in progress</div>
    </div>
  </app-content>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
}
</style>
