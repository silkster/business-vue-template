<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

import mil1 from '@/assets/gallery/mil/MIL_01.jpg';
import mil2 from '@/assets/gallery/mil/MIL_02.jpg';
import mil3 from '@/assets/gallery/mil/MIL_03.jpg';
import mil4 from '@/assets/gallery/mil/MIL_04.jpg';
import mil5 from '@/assets/gallery/mil/MIL_05.jpg';
import mil6 from '@/assets/gallery/mil/MIL_06.jpg';
import mil7 from '@/assets/gallery/mil/MIL_07.jpg';
import mil8 from '@/assets/gallery/mil/MIL_08.jpg';
import mil9 from '@/assets/gallery/mil/MIL_09.jpg';
import mil10 from '@/assets/gallery/mil/MIL_10.jpg';

export default {
  name: 'WorkMil',
  components: {
    AppButton,
    AppContent,
    AppSlider,
  },
  data() {
    return {
      photos: [mil1, mil2, mil3, mil4, mil5, mil6, mil7, mil8, mil9, mil10],
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
        The design of this home was driven by the owners' desire for a
        three-bedroom waterfront home that showcased the spectacular views and
        park-like setting. As nature lovers, they wanted their home to be
        organic, minimize any environmental impact on the sensitive site and
        embrace nature.
      </p>
      <p>
        This unique home is sited on a high ridge with a 45° slope to the water
        on the right and a deep ravine on the left. The five-acre site is
        completely wooded and tree preservation was a major emphasis. Very few
        trees were removed and special care was taken to protect the trees and
        environment throughout the project. To further minimize disturbance,
        grades were not changed and the home was designed to take full advantage
        of the site's natural topography. Oak from the home site was re-purposed
        for the mantle, powder room counter and select furniture.
      </p>
      <p>
        The visually powerful twin pavilions were born from the need for level
        ground and parking on an otherwise challenging site. Fill dirt excavated
        from the main home provided the foundation. All structures are anchored
        with a natural stone base and exterior materials include timber framing,
        fir ceilings, shingle siding, a partial metal roof and corten steel
        walls. Stone, wood, metal and glass transition the exterior to the
        interior and large wood windows flood the home with light and showcase
        the setting. Interior finishes include reclaimed heart pine floors,
        Douglas fir trim, dry-stacked stone, rustic cherry cabinets and
        soapstone counters.
      </p>
      <p>
        Exterior spaces include a timber-framed porch, stone patio with fire pit
        and commanding views of the Occoquan reservoir. A second porch overlooks
        the ravine and a breezeway connects the garage to the home.
      </p>
      <p>
        Numerous energy-saving features have been incorporated, including LED
        lighting, on-demand gas water heating and special insulation. Smart
        technology helps manage and control the entire house.
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
