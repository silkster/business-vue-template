<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

import lyn1 from '@/assets/gallery/lyn/LYN_01.jpg';
import lyn2 from '@/assets/gallery/lyn/LYN_02.jpg';
import lyn3 from '@/assets/gallery/lyn/LYN_03.jpg';
import lyn4 from '@/assets/gallery/lyn/LYN_04.jpg';
import lyn5 from '@/assets/gallery/lyn/LYN_05.jpg';
import lyn6 from '@/assets/gallery/lyn/LYN_06.jpg';
import lyn7 from '@/assets/gallery/lyn/LYN_07.jpg';

export default {
  name: 'WorkLyn',
  components: {
    AppButton,
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  data() {
    return {
      photos: [
        { photo: lyn1, objectFit: 'cover' },
        { photo: lyn2, objectFit: 'cover' },
        { photo: lyn3, objectFit: 'cover' },
        { photo: lyn4, objectFit: 'cover' },
        { photo: lyn5, objectFit: 'scaled-down' },
        { photo: lyn6, objectFit: 'scaled-down' },
        { photo: lyn7, objectFit: 'cover' },
      ],
      ratioInfo: {
        width: 1920,
        height: 1280,
      },
    };
  },
  computed: {
    title() {
      return this.$router.currentRoute.value.meta.title;
    },
    location() {
      return this.$router.currentRoute.value.meta.location;
    },
    photoCredit() {
      return this.$router.currentRoute.value.meta.photography;
    },
    editorial() {
      return this.$router.currentRoute.value.meta.editorial;
    },
    isTrue() {
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
        <h2>{{ location }}</h2>
        <h3 v-if="editorial">By {{ editorial }}</h3>
        <div :class="$style.content">
          <p>
            The Owners of this riverfront property requested a home that was
            designed to showcase the spectacular setting while remaining
            comfortable for large parties or just two people. Every major room
            features magnificent water views and the generous use of rich woods,
            stone, color and scale create warm and inviting spaces despite the
            size.
          </p>
          <p>
            High winds, humidity, and intense reflective sun are some of the
            unique challenges of living on the river and needed to be addressed.
            To overcome these, tinted windows, spray foam insulation, whole
            house radiant heat, and VRF cooling were incorporated to make the
            house energy efficient and comfortable year round.
          </p>
          <p>
            Evidence of superior craftsmanship is everywhere. Extensive custom
            mantles/built-ins along with elegant moldings, coffered ceilings and
            a spectacular cherry vaulted ceiling with accent lighting are just a
            few of the noteworthy details.
          </p>
          <p>
            Clay soils and gypcrete subflooring with hardwood floors were among
            many challenges.
          </p>
        </div>
        <app-button :class="$style.inquireButton" size="large"
          >Inquire</app-button
        >
      </app-content>
    </div>
  </div>
</template>

<style module>
.container {
  width: 100% !important;
  z-index: 100;
}
.inquireButton {
  margin: 0 auto;
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
  background-color: #fff !important;
}
.sliderNavContainer {
  position: absolute;
  z-index: 1000;
  top: calc(100vh - 110px);
  left: 50%;
  transform: translateX(-50%);
}
</style>
