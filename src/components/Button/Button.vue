<script>
import { mapState } from 'vuex';

export default {
  name: 'app-button',

  props: {
    label: {
      type: String,
    },
    showLabel: {
      type: Boolean,
      required: false,
      default: true,
    },
    isPrimary: {
      type: Boolean,
      default: true,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
      default: 'medium',
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  computed: {
    ...mapState(['fontScaleStyle']),
    buttonSize() {
      const { size } = this;
      return `button${size[0].toUpperCase()}${size.substr(1)}`;
    },
    classes() {
      const { $style, buttonSize } = this;
      return {
        [$style.button]: true,
        [$style.buttonPrimary]: this.isPrimary,
        [$style.buttonSecondary]: !this.isPrimary && !this.isIcon,
        [$style.buttonIcon]: this.isIcon,
        [$style[buttonSize]]: true,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick">
    <span v-if="showLabel" :class="$style.buttonText" :style="fontScaleStyle">{{
      label
    }}</span>
    <slot></slot>
  </button>
</template>

<style module>
.button {
  border: 0;
  border-radius: 0;
  color: var(--buton-text-color);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--button-font-family);
  letter-spacing: var(--button-letter-spacing);
  line-height: 1;
  text-transform: var(--button-text-transform);
  height: 42px;
  padding: 0 16px;
  min-width: 16vw;
}
.buttonText {
  color: var(--button-text-color);
}
.buttonPrimary {
  color: var(--button-text-color);
  background-color: var(--button-background-color);
}
.buttonSecondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.buttonIcon {
  background-color: transparent;
  border: none;
  box-shadow: none;
  min-width: unset;
  height: auto;
}
.buttonSmall {
  font-size: 24px;
}
.buttonMedium {
  font-size: 28px;
}
.buttonLarge {
  font-size: 34px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 6px;
}
.buttonText {
  font-size: var(--font-scale);
}

@media screen and (min-width: 1025px) {
  .buttonSmall {
    font-size: 14px;
  }
  .buttonMedium {
    font-size: 18px;
  }
  .buttonLarge {
    font-size: 24px;
  }
}
@media screen and (min-width: 1920px) {
  .button:not(.buttonIcon) {
    min-width: 306px;
  }
}
</style>
