<script>
import img1 from '@/assets/landing/1_DEU.jpg';
import img2 from '@/assets/landing/2_ASH.jpg';
import img3 from '@/assets/landing/3_LOE.jpg';
import img4 from '@/assets/landing/4_PAR.jpg';
import img5 from '@/assets/landing/5_STO.jpg';
import img6 from '@/assets/landing/6_LOE.jpg';

export default {
  name: 'app-slider',
  props: {
    photos: {
      type: Array,
      default() {
        return [];
      },
    },
    ratioDimensions: {
      type: Object,
      default() {
        return {
          height: 1280,
          width: 1920,
        };
      },
    },
  },
  data() {
    return {
      homePhotos: [img1, img2, img3, img4, img5, img6],
      active: 0,
      intervalId: null,
    };
  },
  computed: {
    ratio() {
      const { height, width } = this.ratioDimensions;
      return (height / width) * 100;
    },
    img() {
      const { images, active } = this;
      return images[active];
    },
    slideStyle() {
      return {
        'background-image': `url(${this.img})`,
        'padding-top': `${this.ratio}%`,
      };
    },
    images() {
      return this.photos.length > 0 ? this.photos : this.homePhotos;
    },
  },
  mounted() {
    this.start();
  },
  watch: {
    active: {
      immediate: true,
      handler(active) {
        const vm = this;
        const { $refs, $style, images } = vm;
        let action;
        for (let i = 0; i < images.length; i++) {
          action = i === active ? 'add' : 'remove';
          const id = `nav${i}`;
          const el = $refs[id];
          if (el) el.classList[action]($style.navActive);
        }
      },
    },
  },
  methods: {
    nextSlide() {
      const vm = this;
      let len = vm.images.length;
      let idx = vm.active + 1;
      if (idx < len) {
        vm.active = idx;
      } else {
        vm.active = 0;
      }
    },
    start() {
      this.intervalId = setInterval(this.nextSlide, 6500);
    },
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    toggleSlideshow() {
      const { intervalId } = this;

      console.log('intervalId:', intervalId);

      if (intervalId) {
        this.stop();
      } else {
        this.nextSlide();
        this.start();
      }
    },
    navigate(key) {
      this.stop();
      this.active = key;
      this.start();
    },
  },
};
</script>

<template>
  <link
    v-for="(img, key) in images"
    rel="preload"
    as="image"
    :href="img"
    :key="key"
  />
  <div :class="$style.container" :style="slideStyle" @click="toggleSlideshow">
    <div
      v-for="(img, key) in images"
      :ref="`nav${key}`"
      :id="`nav${key}`"
      :class="{ [$style.nav]: true, [$style.navActive]: key === 0 }"
      :key="key"
      @click.stop="() => navigate(key)"
    ></div>
  </div>
</template>

<style module>
.container {
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: auto;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  transition: background-image 1s ease-in-out;
}
.nav {
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 10px 36px;
  transition: background-color 1s ease-in-out;
}
.navActive {
  background-color: rgba(255, 255, 255, 1);
}
</style>
