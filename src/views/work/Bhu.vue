<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

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
  },
  data() {
    return {
      photos: [bhu1, bhu2, bhu3, bhu4, bhu5, bhu6, bhu7, bhu8],
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
      <p>
        Modernism and traditionalism are just steps away from each other at this
        Vienna Virginia pool house. The main house, built by another national
        homebuilder, draws upon tradition, but the pool house, speaks the
        language of contemporary minimalism. It presents clean lines and a
        soaring roofline overhanging tall glass doors and clerestory windows.
        Great design, careful attention to detail, first-rate materials and
        impeccable craftsmanship have yielded a spectacular solution for outdoor
        entertaining. With a fireplace and every conceivable convenience under
        roof, this pool house might just be the perfect escape for inclement
        weather as well.
      </p>
      <p>
        The pool house was designed with a simple elongated plan parallel to the
        pool and side yard fence, maximizing the view and parental control of
        the outdoor patio and pool from the existing home (as desired by the
        owners). A simple shed roof was utilized to create the contemporary
        spaces and open the pool house to both the yard and pool. Simple
        contemporary cabinets were used in the kitchen, while the interior was
        organized to accommodate the wishes of the clients and maintain views of
        the yard from all of the spaces. Carefully selected lighting was used
        throughout the project to create special effects in the evening and the
        same travertine that was used for the pool deck was incorporated in the
        pool house in order to tie the pool house to the surrounding landscape
        as desired.
      </p>
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
