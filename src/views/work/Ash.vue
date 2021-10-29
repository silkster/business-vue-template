<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

import Ash1 from '@/assets/gallery/ash/ASH_01.jpg';
import Ash2 from '@/assets/gallery/ash/ASH_02.jpg';
import Ash3 from '@/assets/gallery/ash/ASH_03.jpg';
import Ash4 from '@/assets/gallery/ash/ASH_04.jpg';
import Ash5 from '@/assets/gallery/ash/ASH_05.jpg';
import Ash6 from '@/assets/gallery/ash/ASH_06.jpg';
import Ash7 from '@/assets/gallery/ash/ASH_07.jpg';
import Ash8 from '@/assets/gallery/ash/ASH_08.jpg';
import Ash9 from '@/assets/gallery/ash/ASH_09.jpg';
import Ash10 from '@/assets/gallery/ash/ASH_10.jpg';
import Ash11 from '@/assets/gallery/ash/ASH_11.jpg';
import Ash12 from '@/assets/gallery/ash/ASH_12.jpg';
import Ash13 from '@/assets/gallery/ash/ASH_13.jpg';
import Ash14 from '@/assets/gallery/ash/ASH_14.jpg';

export default {
  name: 'WorkAsh',
  components: {
    AppButton,
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  data() {
    return {
      photos: [
        { photo: Ash1, objectFit: 'cover' },
        { photo: Ash2, objectFit: 'cover' },
        { photo: Ash3, objectFit: 'cover' },
        { photo: Ash4, objectFit: 'cover' },
        { photo: Ash5, objectFit: 'cover' },
        { photo: Ash6, objectFit: 'cover' },
        { photo: Ash7, objectFit: 'cover' },
        { photo: Ash8, objectFit: 'cover' },
        { photo: Ash9, objectFit: 'cover' },
        { photo: Ash10, objectFit: 'cover' },
        { photo: Ash11, objectFit: 'cover' },
        { photo: Ash12, objectFit: 'scale-down' },
        { photo: Ash13, objectFit: 'scale-down' },
        { photo: Ash14, objectFit: 'scale-down' },
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
      return `Photography: ${this.$router.currentRoute.value.meta.photography}`;
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
            This horse country estate has a rich history tracing back to 1790.
            In the 1920's, noted architect William Bottomley expanded the simple
            structure into a magnificent stone hunting lodge. However, in recent
            times, the house was unoccupied and fell into disrepair. Our clients
            purchased the structure with the goal of transforming the home into
            a summer retreat suited for large gatherings while still preserving
            the historic character and exterior of the home. The restoration
            involved complete new mechanical, electrical and plumbing systems as
            well as redesign of the spaces to accommodate a young family and
            their visitors.
          </p>
          <p>
            The original kitchen and garage wing were completely transformed
            into a new open kitchen, great room and laundry space. The courtyard
            wall of the garage was removed and replaced with large swinging
            glass panels. The panels are salvaged from an old factory in
            Philadelphia and transformed into a glass wall that can be
            completely opened to the courtyard in the summer.
          </p>
          <p>
            Original features such as the hand painted murals, gold leaf dome
            ceiling, woodwork and phone booth were restored or repurposed to
            serve the current needs of the client while retaining the historic
            artifacts.
          </p>
          <p>
            The floor plan was reimagined to create intimate spaces for the
            family and additional rooms to accommodate a large number of weekend
            visitors or parties. The right wing includes 3 bedrooms, the master
            suite and an informal kitchen, breakfast area and great room. What
            was originally a series of small rooms was reimagined as this space
            for the family to gather on weekends. The central wing includes the
            original parlor, a large formal dining room and a billiards space.
            The attic was converted into a bunk room for visitors. The second
            floor servant's quarters was removed to create a dramatic dining
            space with cathedral ceilings.
          </p>
          <p>
            With respect for the historic significance of the structure, the
            home has been transformed and preserved to serve the needs of future
            generations.
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
