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
    isFixed: {
      type: Boolean,
      default: false,
    },
    navContainerClass: {
      type: String,
      default: null,
    },
    containerClass: {
      type: String,
      default: null,
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
        'padding-top': `${this.ratio}%`,
      };
    },
    images() {
      const { photos, homePhotos } = this;
      const list = photos.length > 0 ? photos : homePhotos;
      const images = list.map((item) => {
        if (typeof item === 'string') {
          return {
            photo: item,
            objectFit: 'cover',
          };
        }
        return item;
      });
      return images;
    },
    navContainerClasses() {
      const { $style, navContainerClass } = this;
      return {
        [$style.navContainer]: true,
        ...(navContainerClass ? { [navContainerClass]: true } : {}),
      };
    },
    containerClasses() {
      const { $style, containerClass } = this;
      return {
        [$style.container]: true,
        ...(containerClass ? { [containerClass]: true } : {}),
      };
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
          const navId = `nav${i}`;
          const $nav = $refs[navId];
          if ($nav) $nav.classList[action]($style.navActive);

          const photoId = `photo${i}`;
          const $photo = $refs[photoId];
          if ($photo) $photo.classList[action]($style.photoActive);
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
    getImageStyle(img) {
      const { photo, ...style } = img;
      console.log(photo, style);
      return style;
    },
  },
};
</script>

<template>
  <div :class="containerClasses" :style="slideStyle" @click="toggleSlideshow">
    <div
      v-for="(img, key) in images"
      :class="{
        [$style.photoContainer]: true,
        [$style.photoActive]: key === 0,
      }"
      :ref="`photo${key}`"
      :key="key"
    >
      <img :src="img.photo" :class="$style.photo" :style="getImageStyle(img)" />
    </div>
  </div>
  <div :class="navContainerClasses">
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
}
.photoContainer {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.photoActive {
  opacity: 1;
}
.photo {
  object-fit: scale-down;
  min-height: 100%;
  min-width: 100%;
}
.navContainer {
  display: flex;
  padding-bottom: 36px;
  justify-content: space-between;
  column-gap: 10px;
  z-index: 100;
}
.nav {
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 1s ease-in-out;
}
.navActive {
  background-color: rgba(255, 255, 255, 1);
}
</style>
