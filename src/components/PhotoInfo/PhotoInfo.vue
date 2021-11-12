<script>
import { string } from '@/util';

const { shiftFirstWord } = string;

export default {
  name: 'photo-info',
  props: {
    caption: {
      type: String,
      default: 'Project Description',
    },
    credit: {
      type: String,
      default: 'Photography credit',
    },
    inProgress: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    captionParts() {
      return shiftFirstWord(this.caption);
    },
    creditHeading() {
      return this.inProgress ? 'Rendering' : 'Photography';
    },
  },
  methods: {
    scrollContentTop() {
      if (this.inProgress) return;
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      window.scroll({
        top: vh - 54,
        behavior: 'smooth',
      });
    },
    navigateBack() {
      this.$emit('back-to-gallery');
    },
  },
};
</script>

<template>
  <div :class="$style.container" @click="scrollContentTop">
    <div :class="$style.caption">
      <span :class="$style.medium">{{ captionParts.left }}</span>
      {{ captionParts.right }}
    </div>
    <div :class="$style.back" @click.prevent="navigateBack">
      <div :class="$style.upArrow"></div>
      Gallery
    </div>
    <div :class="$style.credit">
      <span :class="$style.medium">{{ creditHeading }}:</span> {{ credit }}
    </div>
  </div>
</template>

<style module>
.container {
  align-items: flex-start;
  display: flex;
  height: 54px;
  justify-content: space-between;
  padding: 10px 32px;
  background-color: var(--gray-light);
}
.medium {
  font-weight: var(--font-weight-medium);
}
.caption,
.credit {
  line-height: 1.3;
  display: flex;
  flex-direction: column;
}
.caption {
  cursor: pointer;
  justify-self: flex-start;
}
.credit {
  justify-self: flex-end;
}
.back {
  display: none;
}
.upArrow {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 14px solid var(--black);
  display: inline-block;
}

@media screen and (min-width: 1024px) {
  .caption,
  .credit {
    display: block;
    flex-direction: unset;
  }
  .back {
    display: block;
    font-weight: var(--font-weight-regular);
    cursor: pointer;
  }
}
</style>
