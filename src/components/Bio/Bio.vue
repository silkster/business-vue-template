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
    <div :class="$style.headshotContainer">
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
  position: relative;
}
.headshotContainer {
  position: relative;
  margin-bottom: 0px;
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
  display: flex;
  justify-content: center;
  margin: -10px auto 30px;
}
.backButton {
  min-width: unset;
  padding: 0 30px 0 10px;
  margin: 0 auto;
}

@media screen and (min-width: 630px) {
  .buttonWrap {
    margin: -20px auto 30px;
  }
}
@media screen and (min-width: 1025px) {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
