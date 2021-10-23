<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';

export default {
  name: 'Home',
  components: {
    AppButton,
    AppSlider,
  },
};
</script>

<template>
  <div class="home">
    <app-slider />

    <div :class="$style.container">
      <h1>Enriching lives through design.</h1>
      <p>
        At Kohlmark Flach, we approach architecture with passion, creativity and
        a desire to design homes that enrich the lives of our clients. To
        explore what's possible when a talented team of AIA architects work with
        you, please contact us!
      </p>
      <app-button :class="inquireButton" size="large">Inquire</app-button>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  position: relative;
  max-width: 1024px;
  margin: 60px auto;
  text-align: center;
}
.inquireButton {
  margin: 0 auto;
}
</style>
