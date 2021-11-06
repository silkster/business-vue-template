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
      <app-button
        @click="hideMenu"
        :showLabel="false"
        :isPrimary="false"
        :isIcon="true"
        :class="$style.closeButton"
      >
        <div :class="$style.closeIcon"></div>
      </app-button>
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
  width: 100vw;
  height: 100vw;
  pointer-events: none;
}
.menu {
  align-items: flex-end;
  background-color: var(--white);
  box-shadow: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0;
  padding: 200px 30px 0;
  pointer-events: all;
  height: 100vh;
  position: absolute;
  right: 0;
  top: calc(-100vh - 12px);
  transition: top 0.33s, box-shadow 0.5s, opacity 0.5s;
  width: 100vw;
  z-index: 100;
}
.menu a {
  color: var(--header-menu-link-color);
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  .menuWrap {
    width: 330px;
    height: 176px;
  }
  .menu {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
    height: 465px;
    justify-content: center;
    left: unset;
    padding-top: 0;
    top: -485px;
    width: 310px;
  }
}
.menuOn {
  top: 0;
}
.item {
  align-items: center;
  font-family: var(--font-family);
  font-size: 30px;
  line-height: 1.3;
  text-align: left;
  white-space: nowrap;
  width: 210px;
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
.closeButton {
  position: absolute;
  right: 44px;
  top: 10px;
  width: 32px;
  height: 32px;
}
.closeIcon {
  opacity: 0.3;
}
.closeIcon:hover {
  opacity: 1;
}
.closeIcon:before,
.closeIcon:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.closeIcon:before {
  transform: rotate(45deg);
}
.closeIcon:after {
  transform: rotate(-45deg);
}
</style>
