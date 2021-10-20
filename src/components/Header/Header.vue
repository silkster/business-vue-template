
<script>
import AppButton from '@/components/Button/Button.vue';
import logoSrc from '@/assets/logo.png';
import burgerSrc from '@/assets/burger.png';
import namedRoutes from '@/router/namedRoutes.js';

export default {
  name: 'app-header',

  components: { AppButton },

  data() {
    return {
      logoSrc,
      burgerSrc,
    };
  },

  methods: {
    logoClick() {
      const { $router } = this;
      const { currentRoute } = $router;
      const { home } = namedRoutes;
      const isHome = currentRoute.value.name === home.name;
      if (!isHome) {
        $router.push(home.path);
      }
    },
  },
};
</script>

<template>
  <header>
    <div :class="$style.wrapper">
      <div @click="logoClick">
        <img :src="logoSrc" />
      </div>
      <div :class="$style.burgerWrap">
        <app-button
          primary
          size="small"
          @click="$emit('createAccount')"
          :showLabel="false"
          :isPrimary="false"
          :isIcon="true"
        >
          <img :src="burgerSrc" alt="Menu" />
        </app-button>
      </div>
    </div>
  </header>
</template>

<style module>
.wrapper {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

svg {
  display: inline-block;
  vertical-align: top;
}

h1 {
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

button + button {
  margin-left: 10px;
}
.burgerWrap {
  align-self: flex-start;
}
</style>
