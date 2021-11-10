<script>
import { mapState } from 'vuex';
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
  computed: {
    ...mapState('device', ['isMobile', 'isSmall', 'isTablet']),
    isSmallScreen() {
      const { isSmall, isMobile, isTablet } = this;
      return isSmall || isMobile || isTablet;
    },
    isBio() {
      return true;
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
        :is-bio="isBio"
      />
      <div :class="$style.buttonWrap" v-if="!isSmallScreen">
        <app-button size="medium" @click="$emit('back-to-team')"
          >Back to Team</app-button
        >
      </div>
    </div>
    <div :class="$style.bio" v-html="bio.copy"></div>
    <app-button
      v-if="isSmallScreen"
      size="medium"
      @click="$emit('back-to-team')"
      label="Back to Team"
      :class="$style.lowerButton"
    />
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
  font-size: var(--font-size-normal);
  color: var(--text-color-alt);
  margin-top: 0;
  line-height: 1.5;
}
.buttonWrap {
  display: flex;
  justify-content: center;
  margin: -10px auto 30px;
}
.lowerButton {
  display: flex;
  justify-content: center;
  margin: 0 auto 8px;
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
