<script>
import AppButton from '@/components/Button/Button.vue';
import burgerSrc from '@/assets/burger.png';

export default {
  name: 'app-menu',
  components: {
    AppButton,
  },
  data() {
    return {
      burgerSrc,
      menuOn: false,
    };
  },
  computed: {
    menuClasses() {
      const { $style, menuOn } = this;
      return {
        [$style.menu]: true,
        [$style.menuOn]: menuOn,
      };
    },
  },
  methods: {
    showMenu() {
      this.menuOn = true;
    },
    hideMenu() {
      this.menuOn = false;
    },
  },
};
</script>

<template>
  <div :class="$style.menuWrap">
    <div :class="menuClasses" @mouseleave="hideMenu">
      <div :class="$style.item">
        <router-link to="/" @click="hideMenu">Home</router-link>
      </div>
      <div :class="$style.item">
        <router-link to="/work" @click="hideMenu">Work</router-link>
      </div>
      <div :class="$style.item">
        <router-link to="/wip" @click="hideMenu">In Progress</router-link>
      </div>
      <div :class="$style.item">
        <router-link to="/culture" @click="hideMenu">Culture</router-link>
      </div>
      <div :class="$style.item">
        <router-link to="/team" @click="hideMenu">Team</router-link>
      </div>
      <div :class="$style.item">
        <router-link to="/contact" @click="hideMenu">Contact</router-link>
      </div>
    </div>
  </div>
  <div :class="$style.container">
    <div :class="$style.burgerWrap">
      <app-button
        @click="$emit('createAccount')"
        :showLabel="false"
        :isPrimary="false"
        :isIcon="true"
      >
        <img :src="burgerSrc" alt="Menu" @click="showMenu" />
      </app-button>
    </div>
  </div>
</template>

<style module>
.container {
  position: relative;
  align-self: center;
}
.burgerWrap {
  position: relative;
}
.menuWrap {
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
  height: 385px;
  pointer-events: none;
}
.menu {
  background-color: var(--white);
  box-shadow: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 365px;
  justify-content: center;
  padding: 0 30px;
  pointer-events: all;
  position: absolute;
  right: 0;
  top: -365px;
  transition: top 0.5s, box-shadow 0.5s, opacity 0.5s;
  width: 210px;
  z-index: 100;
}
.menu a {
  color: var(--header-menu-link-color);
  text-decoration: none;
}
.menuOn {
  top: 0;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
}
.item {
  align-items: center;
  display: flex;
  font-family: var(--font-family);
  font-size: 30px;
  line-height: 1.3;
  text-align: left;
  white-space: nowrap;
}
</style>
