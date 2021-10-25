<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

import wri1 from '@/assets/gallery/wri/WRI_01.jpg';
import wri2 from '@/assets/gallery/wri/WRI_02.jpg';
import wri3 from '@/assets/gallery/wri/WRI_03.jpg';
import wri4 from '@/assets/gallery/wri/WRI_04.jpg';
import wri5 from '@/assets/gallery/wri/WRI_05.jpg';

export default {
  name: 'WorkWri',
  components: {
    AppButton,
    AppContent,
    AppSlider,
  },
  data() {
    return {
      photos: [wri1, wri2, wri3, wri4, wri5],
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
        The existing three-bedroom home was originally constructed as a carriage
        house to serve a future estate and never intended to be a primary
        residence. Though full of charm, the small place lacked the space and
        functionality typically found in today's homes. With a growing family
        and defined limitations, the long-time owners wanted to remodel and
        expand.
      </p>
      <p>
        We were asked to design a new foyer, living room and master suite with
        adjacent study above grade and incorporate an exercise room and
        unfinished workspace in the basement. A constant consideration
        throughout the design process was to make sure all work seamlessly
        integrated with the original stone house. Equally challenging and
        important to the design was the home's location at the bottom of a steep
        rural site. A large swale located directly adjacent to the existing
        residence acted as a natural watershed for a large portion of the
        property. To address and overcome this challenge, we designed the living
        room as a bridge, literally spanning the existing swale and joining the
        carriage house with the new master bedroom wing.
      </p>
      <p>
        The final design incorporates a stone gatehouse with a copper
        standing-seam roof to act as the new foyer and features a cathedral
        ceiling with exposed beams. The adjacent living room bridges the
        carriage house with the new master bedroom wing and features the same
        cathedral ceiling and exposed beams found in the foyer. Abundant windows
        flood the space with light and the exposed stone and honey-colored
        hardwood floors create warmth.
      </p>
      <p>
        Outside, the entire master bedroom wing is constructed with stone that
        is a near perfect match to the original carriage house. A new deck with
        direct access to the living room runs from the entry foyer gatehouse to
        the master bedroom wing and features a delicate stainless steel cable
        rail system that maximizes visibility. The existing motor court was
        utilized as the patio for the front entry foyer and special lighting was
        incorporated to accent the entire home.
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
