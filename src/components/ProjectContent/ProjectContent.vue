<script>
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';
export default {
  name: 'project-content',
  components: {
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  props: {
    photos: { type: Array },
    ratioInfo: { type: Object },
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.value;
    },
    title() {
      return this.currentRoute.meta.title;
    },
    location() {
      return this.currentRoute.meta.location;
    },
    photoCredit() {
      return `${this.currentRoute.meta.photography}`;
    },
    editorial() {
      return this.currentRoute.meta.editorial;
    },
    isFixed() {
      return true;
    },
  },
};
</script>

<template>
  <app-slider
    :photos="photos"
    :is-fixed="isFixed"
    :container-class="$style.paralaxed"
    :nav-container-class="$style.sliderNavContainer"
  />
  <div :class="$style.container">
    <div :class="$style.paralaxedSpace"></div>
    <div :class="$style.topContent">
      <photo-info :credit="photoCredit" />

      <app-content>
        <h1>{{ title }}</h1>
        <p>{{ location }}</p>
        <div :class="$style.content">
          <slot></slot>

          <h3 v-if="editorial">By {{ editorial }}</h3>
        </div>
      </app-content>
    </div>
  </div>
</template>

<style module>
.container {
  width: 100% !important;
  z-index: 100;
}
.content {
  margin-bottom: 60px;
}
.content p {
  text-align: left !important;
}
.photoCredit {
  padding: 10px;
  text-align: right;
  font-weight: var(--font-weight-bold);
}
.paralaxed {
  z-index: -2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 54px;
}
.paralaxedSpace {
  height: calc(100vh - 54px);
  pointer-events: none;
}
.topContent {
  background-color: var(--gray-light);
}
.sliderNavContainer {
  position: absolute;
  z-index: 1000;
  top: calc(100vh - 110px);
  left: 50%;
  transform: translateX(-50%);
}
</style>
