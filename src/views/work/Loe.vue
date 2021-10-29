<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

import loe1 from '@/assets/gallery/loe/LOE_01.jpg';
import loe2 from '@/assets/gallery/loe/LOE_02.jpg';
import loe3 from '@/assets/gallery/loe/LOE_03.jpg';
import loe4 from '@/assets/gallery/loe/LOE_04.jpg';
import loe5 from '@/assets/gallery/loe/LOE_05.jpg';
import loe6 from '@/assets/gallery/loe/LOE_06.jpg';
import loe7 from '@/assets/gallery/loe/LOE_07.jpg';
import loe8 from '@/assets/gallery/loe/LOE_08.jpg';
import loe9 from '@/assets/gallery/loe/LOE_09.jpg';
import loe10 from '@/assets/gallery/loe/LOE_10.jpg';
import loe11 from '@/assets/gallery/loe/LOE_11.jpg';
import loe12 from '@/assets/gallery/loe/LOE_12.jpg';
import loe13 from '@/assets/gallery/loe/LOE_13.jpg';

export default {
  name: 'WorkLoe',
  components: {
    AppButton,
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  data() {
    return {
      photos: [
        { photo: loe1, objectFit: 'cover' },
        { photo: loe2, objectFit: 'cover' },
        { photo: loe3, objectFit: 'scale-down' },
        { photo: loe4, objectFit: 'cover' },
        { photo: loe5, objectFit: 'cover' },
        { photo: loe6, objectFit: 'scale-down' },
        { photo: loe7, objectFit: 'cover' },
        { photo: loe8, objectFit: 'scale-down' },
        { photo: loe9, objectFit: 'cover' },
        { photo: loe10, objectFit: 'scale-down' },
        { photo: loe11, objectFit: 'scale-down' },
        { photo: loe12, objectFit: 'cover' },
        { photo: loe13, objectFit: 'cover' },
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
            Ensconced in a neighborhood with its own wooded trail leading down
            to the C&amp;O Canal towpath, the owners and their three young boys
            adored their pristine surroundings. If only their 1980s Colonial
            home shared a similar reverence for Mother Nature. Its windows were
            too few and far between to appreciate the views. Outdated mechanical
            systems and poor insulation made the house drafty and inefficient.
            It also had an outdated kitchen and disjointed floor plan.
          </p>
          <p>
            House-hunting forays to find something better led to a simple
            realization: No other lot in the Metro area could hold a candle to
            their Potomac gem. So they decided to stay put, and commissioned
            KohlMark Group to design a renovation—which eventually evolved into
            the design of a brand new house.
          </p>
          <p>
            Unencumbered by the constraints of the original structure, the
            architect and his clients were free to explore bold new options.
            They set their sights on a modern home with an open floor plan that
            would celebrate nature, accommodate parties of all sizes, and
            project sophisticated style without sacrificing comfort or
            durability.
          </p>
          <p>
            Faced with a limited footprint on the two-acre lot, the home was
            nestled around the existing pool without disturbing the mature river
            birches in the front yard. The home's southern orientation made
            solar power an easy option—happily for the owners, whose
            determination to tread lightly on the environment drove the entire
            building process. Before demolition, Second Chance, a Baltimore
            non-profit, deconstructed the original house—and was able to recycle
            two-thirds of its materials. The owners selected insulated low-E,
            argon-filled windows; spray-foam insulation; low-voltage and LED
            lighting and low-flow and dual-flush plumbing fixtures for maximum
            efficiency. The solar system fuels electricity and hot water.
          </p>
          <p>
            But going sustainable did not mean settling for spartan over
            über-chic. In fact, many of the home's features required daring
            feats of engineering, from walls of glass to a three-level
            cantilevered, helical staircase to an open "fire pit" hearth in the
            living room that appears to defy gravity. The walls were painted
            white to allow the home's organic materials—Brazilian cherry floors,
            stone and glass—and the views to take center stage.
          </p>
          <p>
            Voluminous and intimate rooms on the main level yield to a
            second-story "bridge" connecting the bedrooms. By contrast, dark
            gray dining room takes on a glamorous vibe thanks to the crystal
            pendants by Schonbek.
          </p>
          <p>
            The living room is oriented toward the outside with a two-story wall
            of glass. A custom rug mimics the line of the ceiling above, and a
            series of wall sculptures by John Douglas makes a bold statement.
            The living room leads to a loggia, where a NanaWall opens completely
            to face the backyard.
          </p>
          <p>
            Public and private "zones" cater to both family and social
            functions. A pocket door closes off the kitchen, family room and
            family powder room, and a back stairway and elevator lead upstairs
            so the kids can use these spaces during a party—sight and sound
            unseen.
          </p>
          <p>
            The wife, an expert cook, immersed herself in the kitchen design
            with help from kitchen designer Patty Whitman. Double ovens, sinks,
            microwaves and dishwashers make the space functional, while Bianco
            Antico granite countertops and a white back-painted glass backsplash
            offset dark cabinets and wood floors. In the adjacent family room,
            oversized windows flank a stucco-clad fireplace.
          </p>
          <p>
            The master suite, positioned on one side of the bridge above the
            loggia with the boys' rooms on the other, is a picture of serenity.
            Inspired by a hotel the couple visited in Mexico, the bathroom
            pampers them with smooth limestone and marble tiles and a soaking
            tub with views of the treetops.
          </p>
          <p>
            The second floor also features rooms with en suite baths for each
            son, a well-appointed guest suite and a kids' gallery where the
            parents and boys gather to read and unwind before bedtime. A large
            third-story playroom prevents toys from straying into other areas of
            the house.
          </p>
          <p>
            On the lower level, the owners have created a sophisticated "club
            room." Unlike their previously dark basement, the new space is
            bathed in light thanks to the open staircase and bridge near the
            fireplace. An indoor-outdoor bar, a modular sofa and an etched
            stainless-steel wall sculpture make this space perfect for large
            gatherings. A whole-house Lutron lighting system and wireless sound
            system by SONOS enable the owners to set moods with ease. The lower
            level also features an exercise room and a bathroom with a steam
            shower.
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
