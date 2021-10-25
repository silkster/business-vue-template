<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

import par1 from '@/assets/gallery/par/PAR_01.jpg';
import par2 from '@/assets/gallery/par/PAR_02.jpg';
import par3 from '@/assets/gallery/par/PAR_03.jpg';
import par4 from '@/assets/gallery/par/PAR_04.jpg';
import par5 from '@/assets/gallery/par/PAR_05.jpg';
import par6 from '@/assets/gallery/par/PAR_06.jpg';
import par7 from '@/assets/gallery/par/PAR_07.jpg';
import par8 from '@/assets/gallery/par/PAR_08.jpg';

export default {
  name: 'WorkPar',
  components: {
    AppButton,
    AppContent,
    AppSlider,
  },
  data() {
    return {
      photos: [par1, par2, par3, par4, par5, par6, par7, par8],
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
        It's all about location and the owners of this dated 1990s colonial
        purchased the home for its spectacular views and setting. Unfortunately,
        the design of the existing home did not live up to its potential. An
        awkwardly placed mudroom blocked an otherwise magnificent view from the
        existing kitchen and breakfast room while the second floor turned its
        back on the amazing high views of the vineyard and mountains beyond. The
        unfinished basement did little to connect with the beautiful rear yard
        and the “builder grade” windows and exterior materials were at the end
        of their useful life.
      </p>
      <p>
        A rear two-story addition created special spaces on each level. On the
        second floor, the master suite was expanded to create a retreat in the
        sky with glass on all sides. On the first floor, a new large mud room
        with dog shower and a larger open breakfast area created a functional
        space that maximized the views. In addition, a new deck and stair
        connects the house to the yard and the new pool and spa. The new
        basement includes all of the spaces required for entertaining including
        a billiards area, home office, media room and wet bar. In addition, a
        covered lower outdoor entertainment area with a two sided fireplace
        connects the indoors and the outdoors.
      </p>
      <p>
        To complete the transformation, all new windows, siding, roof, and a
        front porch changed the tired colonial into a modern farmhouse with
        black windows and white board and batten siding. A new window design in
        the great room completed the transformation and maximized the views. The
        new front porch provides a more welcome entrance and a new space for
        relaxing and connecting with the outdoors.
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
