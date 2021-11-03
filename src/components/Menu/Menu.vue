<script>
import { mapState } from 'vuex';
import namedRoutes from '@/router/namedRoutes';
import AppButton from '@/components/Button/Button.vue';
import burgerSrc from '@/assets/burger.png';

const { home, work, wip, about, team, contact } = namedRoutes;

export default {
  name: 'app-menu',
  components: {
    AppButton,
  },
  data() {
    return {
      activeLink: null,
      burgerSrc,
      menuOn: false,
      menuItems: [
        {
          ...home,
          displayName: 'Home',
          isActive: true,
        },
        {
          ...work,
          displayName: 'Work',
          isActive: false,
        },
        {
          ...wip,
          displayName: 'In Progress',
          isActive: false,
        },
        {
          ...about,
          displayName: 'About',
          isActive: false,
        },
        {
          ...team,
          displayName: 'Team',
          isActive: false,
        },
        {
          ...contact,
          displayName: 'Contact',
          isActive: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(['route']),
    menuClasses() {
      const { $style, menuOn } = this;
      return {
        [$style.menu]: true,
        [$style.menuOn]: menuOn,
      };
    },
  },
  watch: {
    route: {
      immediate: true,
      handler(route) {
        const name = (route && route.name) || 'home';
        this.setActiveItem(name);
      },
    },
  },
  methods: {
    showMenu() {
      this.menuOn = true;
    },
    hideMenu() {
      this.menuOn = false;
    },
    setActiveItem(routeName) {
      const { menuItems } = this;
      menuItems
        .filter((item) => item.isActive)
        .forEach((item) => {
          item.isActive = false;
        });
      const item = menuItems.find((item) => item.name === routeName);
      if (item) {
        item.isActive = true;
      }
    },
    getItemStyles(name) {
      const { $style, route } = this;
      const isActive = route.name === name;
      return {
        [$style.item]: true,
        ...(isActive ? { [$style.active]: true } : {}),
      };
    },
  },
};
</script>

<template>
  <div :class="$style.menuWrap">
    <div :class="menuClasses" @mouseleave="hideMenu">
      <div
        v-for="item in menuItems"
        :class="getItemStyles(item.name)"
        :key="item.name"
      >
        <router-link :to="item.path" @click="hideMenu" :class="$style.link">{{
          item.displayName
        }}</router-link>
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
  font-family: var(--font-family);
  font-size: 30px;
  line-height: 1.3;
  text-align: left;
  white-space: nowrap;
}
.link {
  display: block;
  cursor: pointer;
  color: var(--text-color);
}
.item:hover .link,
.active .link {
  color: var(--text-color-menu-hover);
}
</style>
