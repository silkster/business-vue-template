<script>
import { mapState } from 'vuex';
import AppContent from '@/components/Content/Content.vue';
import HeadShot from '@/components/HeadShot/HeadShot.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppBio from '@/components/Bio/Bio.vue';
import bannerJpg from '@/assets/banners/team.jpg';

export default {
  name: 'Team',
  components: {
    AppBio,
    AppContent,
    AppSlider,
    HeadShot,
  },
  data() {
    return {
      photos: [bannerJpg],
      ratioInfo: {
        height: 700,
        width: 1920,
      },
      selectedBio: null,
      showBio: false,
      show: {
        opacity: 1,
      },
      hide: {
        opacity: 2,
      },
    };
  },
  computed: {
    ...mapState('team', ['bios']),
    modalStyle() {
      const { showBio, show, hide } = this;
      return {
        ...(showBio ? show : hide),
      };
    },
  },
  watch: {
    selectedBio(bio) {
      this.showBio = !!bio;
    },
  },
  methods: {
    openBio(bio) {
      // this.$router.push({ name });
      this.selectedBio = bio;
    },
  },
};
</script>

<template>
  <app-slider
    :nav-container-class="$style.sliderNavContainer"
    :photos="photos"
    :ratio-dimensions="ratioInfo"
  />
  <app-content :class="$style.content">
    <div :class="$style.container">
      <head-shot
        v-for="bio in bios"
        :key="bio.id"
        :full-name="bio.fullName"
        :photoSrc="bio.photo"
        :title="bio.title"
        @click="openBio(bio)"
      />
    </div>
    <div :class="$style.modal" :style="modalStyle" v-if="selectedBio">
      <div :class="$style.modalWrap">
        <app-bio :bio="selectedBio" @back-to-team="selectedBio = null" />
      </div>
    </div>
  </app-content>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1260px;
}
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 200px;
  transition: opacity 1s ease-in-out;
}
.headShot {
  cursor: pointer;
}
.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 32px;
  background-color: var(--gray-light);
  overflow: auto;
  transition: opacity 1s ease-in-out 0.5s;
  padding: 32px;
}
.modalOpen {
  opacity: 1;
}
.modalWrap {
  position: relative;
}
@media screen and (min-width: 1025) {
  .modal {
    position: absolute;
    top: 68px;
    bottom: 68px;
  }
  .modalWrap {
    position: relative;
    padding: 0 60px 60px 0;
  }
}
</style>
