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
  },
  computed: {
    captionParts() {
      return shiftFirstWord(this.caption);
    },
  },
  methods: {
    scrollContentTop() {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      window.scroll({
        top: vh - 54,
        behavior: 'smooth',
      });
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
    <div :class="$style.credit">
      <span :class="$style.medium">Photography</span> {{ credit }}
    </div>
  </div>
</template>

<style module>
.container {
  align-items: center;
  display: flex;
  height: 54px;
  justify-content: space-between;
  padding: 0 210px;
  background-color: var(--gray-light);
}
.caption {
  position: relative;
  cursor: pointer;
}
.medium {
  font-weight: var(--font-weight-medium);
}
.credit {
  justify-self: flex-end;
  text-align: right;
}
</style>
