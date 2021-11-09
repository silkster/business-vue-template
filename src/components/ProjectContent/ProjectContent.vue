<script>
import { mapGetters } from 'vuex';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

export default {
  name: 'project-content',
  components: {
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  props: {
    pagetype: {
      type: String,
    },
    id: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
  data() {
    return {
      project: null,
      inProgress: false,
    };
  },
  computed: {
    photos() {
      const { photo, photos } = this.project;
      return photos || (photo && [photo]) || [];
    },
    title() {
      const { project } = this;
      return (project && project.title) || '';
    },
    location() {
      const { project } = this;
      return (project && project.location) || null;
    },
    caption() {
      const { project } = this;
      return project.inProgress
        ? `Delivery ${project.delivery}`
        : 'Project Description';
    },
    photoCredit() {
      return this.project.photography;
    },
    editorial() {
      const { project } = this;
      return (project && project.editorial) || null;
    },
    isFixed() {
      return true;
    },
    showContent() {
      return !this.inProgress;
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        const getProject = this.getProject(id);
        this.project = getProject(id);
        this.inProgress = this.project.inProgress || false;
      },
    },
  },
  methods: {
    ...mapGetters('portfolio', ['getProject']),
    gotoGallery() {
      const { $router, pagetype } = this;
      $router.push({ path: `/portfolio/${pagetype}` });
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
      <photo-info
        :credit="photoCredit"
        :caption="caption"
        :in-progress="inProgress"
        @back-to-gallery="gotoGallery"
      />

      <template v-if="showContent">
        <app-content>
          <h1>{{ title }}</h1>
          <p>{{ location }}</p>
          <div :class="$style.content">
            <div v-html="project.copy"></div>
            <h3 v-if="editorial">By {{ editorial }}</h3>
          </div>
        </app-content>
      </template>
    </div>
  </div>
</template>

<style module>
.container {
  width: 100% !important;
  z-index: var(--z-index-content);
}
.content {
  margin-bottom: 60px;
}
.container p {
  text-align: left !important;
  color: var(--text-color-alt);
  font-size: var(--p-font-size);
  font-weight: var(--font-weight-light);
}
.photoCredit {
  padding: 10px;
  text-align: right;
  font-weight: var(--font-weight-bold);
}
.paralaxed {
  z-index: var(--z-index-base);
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
  background-color: var(--gray-light);
}
.sliderNavContainer {
  position: absolute;
  z-index: var(--z-index-content-level-1);
  top: calc(100vh - 110px);
  left: 50%;
  transform: translateX(-50%);
}
</style>
