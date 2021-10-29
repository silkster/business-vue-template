<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

import bhu1 from '@/assets/gallery/bhu/BHU_01.jpg';
import bhu2 from '@/assets/gallery/bhu/BHU_02.jpg';
import bhu3 from '@/assets/gallery/bhu/BHU_03.jpg';
import bhu4 from '@/assets/gallery/bhu/BHU_04.jpg';
import bhu5 from '@/assets/gallery/bhu/BHU_05.jpg';
import bhu6 from '@/assets/gallery/bhu/BHU_06.jpg';
import bhu7 from '@/assets/gallery/bhu/BHU_07.jpg';
import bhu8 from '@/assets/gallery/bhu/BHU_08.jpg';

export default {
  name: 'WorkBhu',
  components: {
    AppButton,
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  data() {
    return {
      photos: [
        { photo: bhu1, objectFit: 'cover' },
        { photo: bhu2, objectFit: 'cover' },
        { photo: bhu3, objectFit: 'cover' },
        { photo: bhu4, objectFit: 'cover' },
        { photo: bhu5, objectFit: 'cover' },
        { photo: bhu6, objectFit: 'cover' },
        { photo: bhu7, objectFit: 'cover' },
        { photo: bhu8, objectFit: 'cover' },
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
          <p>
            Modernism and traditionalism are just steps away from each other at
            this Vienna Virginia pool house. The main house, built by another
            national homebuilder, draws upon tradition, but the pool house,
            speaks the language of contemporary minimalism. It presents clean
            lines and a soaring roofline overhanging tall glass doors and
            clerestory windows. Great design, careful attention to detail,
            first-rate materials and impeccable craftsmanship have yielded a
            spectacular solution for outdoor entertaining. With a fireplace and
            every conceivable convenience under roof, this pool house might just
            be the perfect escape for inclement weather as well.
          </p>
          <p>
            The pool house was designed with a simple elongated plan parallel to
            the pool and side yard fence, maximizing the view and parental
            control of the outdoor patio and pool from the existing home (as
            desired by the owners). A simple shed roof was utilized to create
            the contemporary spaces and open the pool house to both the yard and
            pool. Simple contemporary cabinets were used in the kitchen, while
            the interior was organized to accommodate the wishes of the clients
            and maintain views of the yard from all of the spaces. Carefully
            selected lighting was used throughout the project to create special
            effects in the evening and the same travertine that was used for the
            pool deck was incorporated in the pool house in order to tie the
            pool house to the surrounding landscape as desired.
          </p>

          <h3 v-if="editorial">By {{ editorial }}</h3>
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
