<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

import kuz1 from '@/assets/gallery/kuz/KUZ_01.jpg';
import kuz2 from '@/assets/gallery/kuz/KUZ_02.jpg';
import kuz3 from '@/assets/gallery/kuz/KUZ_03.jpg';
import kuz4 from '@/assets/gallery/kuz/KUZ_04.jpg';
import kuz5 from '@/assets/gallery/kuz/KUZ_05.jpg';
import kuz6 from '@/assets/gallery/kuz/KUZ_06.jpg';
import kuz7 from '@/assets/gallery/kuz/KUZ_07.jpg';
import kuz8 from '@/assets/gallery/kuz/KUZ_08.jpg';

export default {
  name: 'WorkKuz',
  components: {
    AppButton,
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  data() {
    return {
      photos: [
        { photo: kuz1, objectFit: 'cover' },
        { photo: kuz2, objectFit: 'cover' },
        { photo: kuz3, objectFit: 'cover' },
        { photo: kuz4, objectFit: 'cover' },
        { photo: kuz5, objectFit: 'cover' },
        { photo: kuz6, objectFit: 'scale-down' },
        { photo: kuz7, objectFit: 'scale-down' },
        { photo: kuz8, objectFit: 'cover' },
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
        <h2>{{ location }}</h2>
        <h3 v-if="editorial">By {{ editorial }}</h3>
        <div :class="$style.content">
          <p>
            The owners of this historic farmhouse sought a comprehensive
            addition to expand the living and entertaining spaces while bringing
            the family together with a more open, fluid and friendly layout.
          </p>
          <p>
            The small rooms, low ceilings and dark, interior kitchen have given
            way to open spaces, vaulted ceilings and a spectacular relocated
            kitchen. A floor-to-ceiling folding door opens the entire great room
            to the outdoors while the visually stunning timber frame trusses
            support the vaulted ceiling and hint to the traditional barn on
            site.
          </p>
          <p>
            The original breezeway that connected the garage to the house was
            rarely used so a new central foyer was designed in its place. The
            wide entrance offers great views of the pool, pool house and farm
            while drawing people into the new entertaining spaces.
          </p>
          <p>
            Use of shiplap siding on the walls, tongue & groove ceilings,
            recessed lighting and wide-plank white oak floors give the entire
            space a fresh look.
          </p>
          <p>
            Great care was taken to expand the home without diminishing its
            historic charm or period details. The soffits, fascia, clapboard
            siding and windows seamlessly integrate with the original home.
            Colonial windows were replaced with “farm style” 2/2 windows for a
            more traditional look and exterior barn lights are an authentic
            touch consistent with those used on the detached barn and adjacent
            pool house.
          </p>
          <p>
            All this work was not without its challenges. The older additions
            were not properly aligned with the original dwelling, so floors
            needed to be elevated and leveled. All work was done while three
            adults, two kids and two dogs occupied the home. This meant building
            the new addition and kitchen had to occur prior to removing the old
            kitchen.
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
