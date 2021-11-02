<script>
import HeadShot from '@/components/HeadShot/HeadShot';
import AppButton from '@/components/Button/Button';

export default {
  name: 'app-bio',
  components: { HeadShot, AppButton },
  props: {
    bio: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<template>
  <div :class="$style.container">
    <div :class="headshotContainer">
      <head-shot
        :photo-src="bio.photo"
        :full-name="bio.fullName"
        :title="bio.title"
        :class="$style.headShot"
      />
      <div :class="$style.buttonWrap">
        <app-button
          size="medium"
          :class="$style.backButton"
          @click="$emit('back-to-team')"
          >&larr; Back to Team</app-button
        >
      </div>
    </div>
    <div :class="$style.bio" v-html="bio.copy"></div>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.headShot {
  flex-grow: 1;
}
.bio {
  position: relative;
  flex-grow: 3;
  overflow-y: auto;
}
.bio p {
  text-align: left;
  font-size: var(--font-size-regular);
  margin-top: 0;
  line-height: 1.5;
}
.buttonWrap {
  margin-right: 60px;
}
.backButton {
  min-width: unset;
  padding: 0 30px 0 10px;
}
</style>
