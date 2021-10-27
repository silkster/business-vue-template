<script>
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
      const { caption } = this;
      const [left, ...right] = caption.split(' ');
      return {
        left,
        right: right.join(' '),
      };
    },
  },
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.caption">
      <span :class="$style.medium">{{ captionParts.left }}</span>
      {{ captionParts.right }}
    </div>
    <div :class="$style.credit">{{ credit }}</div>
  </div>
</template>

<style module>
.container {
  align-items: center;
  display: flex;
  height: 54px;
  justify-content: space-between;
  padding: 0 210px;
}
.caption {
  position: relative;
}
.medium {
  font-weight: var(--font-weight-medium);
}
.credit {
  justify-self: flex-end;
  text-align: right;
}
</style>
