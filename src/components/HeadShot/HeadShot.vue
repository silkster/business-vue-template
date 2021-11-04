<script>
import AppLogo from '@/assets/logo.png';

export default {
  name: 'head-shot',
  props: {
    photoSrc: {
      type: String,
      default: AppLogo,
    },
    fullName: {
      type: String,
      default: 'TBD',
    },
    title: {
      type: String,
      default: 'TBD',
    },
  },
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.photo">
      <img :src="photoSrc" :alt="title" />
    </div>
    <div :class="$style.labels">
      <div :class="$style.fullName">{{ fullName }}</div>
      <div :class="$style.separator">|</div>
      <div :class="$style.title">{{ title }}</div>
    </div>
  </div>
</template>

<style module>
.container {
  position: relative;
  width: 80vw;
  height: 95vw;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 384px;
  max-height: 478px;
}
.photo {
  position: relative;
  height: 80vw;
  width: 80vw;
  max-height: 384px;
  max-width: 384px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--white);
  overflow: hidden;
}
.photo img {
  max-width: 100%;
}
.labels {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  font-size: 24px;
  letter-spacing: 1px;
}
.fullName,
.separator {
  position: relative;
  color: var(--black);
  font-weight: var(--font-weight-bold);
}
.separator {
  margin: 0 16px;
}
.title {
  position: relative;
  font-weight: var(--font-weight-regular);
  color: var(--orange);
}

@media screen and (min-width: 630px) {
  .container {
    width: 430px;
    height: 485px;
    margin-bottom: 60px;
    max-width: unset;
    max-height: unset;
  }

  .photo {
    height: 430px;
    width: 430px;
    max-width: unset;
    max-height: unset;
  }
}
@media screen and (min-width: 1025px) {
  .container:nth-child(odd) {
    margin-right: 60px;
  }
  .container:nth-child(even) {
    margin-left: 60px;
  }
}
</style>
