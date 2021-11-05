export default {
  setAppHeight(state, height) {
    state.appHeight = height;
  },
  setViewport(state, viewport) {
    state.viewport = viewport;
  },
  setFontScale(state, scale) {
    state.fontScale = scale;
  },
  setFontScaleStyle(state, scale) {
    state.fontScaleStyle = {
      '--font-scale': `${scale}%`,
    };
  },
};
