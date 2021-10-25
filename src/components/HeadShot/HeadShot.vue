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
      <div :class="$style.title">{{ title }}</div>
    </div>
  </div>
</template>

<style module>
.container {
  position: relative;
  width: 430px;
  height: 485px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
.container:nth-child(odd) {
  margin-right: 30px;
}
.container:nth-child(even) {
  margin-left: 30px;
}
.photo {
  position: relative;
  height: 430px;
  width: 430px;
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
}
.fullName {
  position: relative;
  color: var(--black);
  font-weight: var(--font-weight-bold);
  padding-right: 16px;
  margin-right: 16px;
  border-right: 2px solid var(--orange);
}
.title {
  position: relative;
  font-weight: var(--font-weight-medium-dark);
  color: var(--orange);
}
</style>
