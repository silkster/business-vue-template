<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

export default {
  name: 'Home',
  components: {
    AppButton,
    AppContent,
    AppSlider,
  },
};
</script>

<template>
  <app-slider />
  <app-content>
    <h1>Enriching lives through design.</h1>
    <p>
      At Kohlmark Flach, we approach architecture with passion, creativity and a
      desire to design homes that enrich the lives of our clients. To explore
      what's possible when a talented team of AIA architects work with you,
      please contact us!
    </p>
    <app-button :class="$style.inquireButton" size="large">Inquire</app-button>
  </app-content>
</template>

<style module>
.inquireButton {
  margin: 0 auto;
}
</style>
