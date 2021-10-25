<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

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
  },
  data() {
    return {
      photos: [
        Ash1,
        Ash2,
        Ash3,
        Ash4,
        Ash5,
        Ash6,
        Ash7,
        Ash8,
        Ash9,
        Ash10,
        Ash11,
        Ash12,
        Ash13,
        Ash14,
      ],
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
  },
};
</script>

<template>
  <app-slider :photos="photos" />
  <div :class="$style.projectNav">
    <div :class="$style.photoCredit">Photography: {{ photoCredit }}</div>
  </div>
  <app-content>
    <h1>{{ title }}</h1>
    <h2>{{ location }}</h2>
    <h3 v-if="editorial">By {{ editorial }}</h3>
    <div :class="$style.content">
      <p>TBD</p>
    </div>
    <app-button :class="$style.inquireButton" size="large">Inquire</app-button>
  </app-content>
</template>

<style module>
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
</style>
