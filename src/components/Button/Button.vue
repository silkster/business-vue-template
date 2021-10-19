<script>
import './button.css';
import { reactive, computed, useCssModule } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
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

  setup(props, { emit }) {
    props = reactive(props);
    const $style = useCssModule();
    const buttonSize = computed(() => {
      return props.size[0].toUpperCase() + props.size.substr(1);
    });
    const classes = computed(() => ({
      [$style.button]: true,
      [$style.buttonPrimary]: props.primary,
      [$style.buttonSecondary]: !props.primary,
      [$style[buttonSize]]: true,
    }));
    return {
      buttonSize,
      classes,
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<style module>
/*
  --button-color: var(--orange);
  --button-text-color: var(--white);
  --button-letter-spacing: 2;
  --button-text-transform: uppercase;
*/
.button {
  border: 0;
  border-radius: 2px;
  color: var(--buton-text-color);
  cursor: pointer;
  display: inline-block;
  font-family: var(--button-font-family);
  letter-spacing: var(--button-letter-spacing);
  line-height: 1;
  text-transform: var(--button-text-transform);
}
.buttonPrimary {
  color: white;
  background-color: #1ea7fd;
}
.buttonSecondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.buttonSmall {
  font-size: 12px;
  padding: 10px 16px;
}
.buttonMedium {
  font-size: 14px;
  padding: 11px 20px;
}
.buttonLarge {
  font-size: 16px;
  padding: 12px 24px;
}
</style>

