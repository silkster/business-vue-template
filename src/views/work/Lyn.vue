<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

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
  },
  data() {
    return {
      photos: [lyn1, lyn2, lyn3, lyn4, lyn5, lyn6, lyn7],
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
        The Owners of this riverfront property requested a home that was
        designed to showcase the spectacular setting while remaining comfortable
        for large parties or just two people. Every major room features
        magnificent water views and the generous use of rich woods, stone, color
        and scale create warm and inviting spaces despite the size.
      </p>
      <p>
        High winds, humidity, and intense reflective sun are some of the unique
        challenges of living on the river and needed to be addressed. To
        overcome these, tinted windows, spray foam insulation, whole house
        radiant heat, and VRF cooling were incorporated to make the house energy
        efficient and comfortable year round.
      </p>
      <p>
        Evidence of superior craftsmanship is everywhere. Extensive custom
        mantles/built-ins along with elegant moldings, coffered ceilings and a
        spectacular cherry vaulted ceiling with accent lighting are just a few
        of the noteworthy details.
      </p>
      <p>
        Clay soils and gypcrete subflooring with hardwood floors were among many
        challenges.
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
