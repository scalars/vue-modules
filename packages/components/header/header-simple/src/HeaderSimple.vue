<template>
  <Header :primary="primary" :height="height" :fixed="fixed">
    <div class="wrapper">
      <div class="start">
        <slot class="start" />
        <MenuIcon
          class="d-lg-none menu-icon"
          @click="toggleMenu"
          :primary="primary"
        >
          <div v-if="icon" v-html="icon" />
          <Icon
            v-if="!icon"
            :style="{ width: '60%', height: '60%', fill: primary }"
          />
        </MenuIcon>
      </div>
      <div class="end" :class="{ open: openMenu }" @click="toggleMenu">
        <slot name="center">
          <div />
        </slot>
        <slot name="end">
          <div />
        </slot>
      </div>
      <div
        class="shadow"
        :style="{ top: openMenu ? '0' : '-100vh' }"
        @click="toggleMenu"
      />
    </div>
  </Header>
</template>

<script>
import Icon from "!!vue-svg-loader!../assets/menu_icon_2.svg";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MenuIcon from "./MenuIcon";
import Header from "./Header";

export default {
  name: "header-simple",
  props: {
    height: { type: String, default: "60px" },
    fixed: { type: Boolean, default: false },
    icon: { type: String, default: null },
    primary: { type: String, default: "orange" }
  },
  components: {
    Icon,
    MenuIcon,
    Header
  },
  data() {
    return {
      openMenu: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.openMenu = !this.openMenu;
    }
  },
  mounted() {
    this.$classes;
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1366px;
  margin: auto;

  .start {
    background-color: #fff;
    @media screen and (max-width: 991px) {
      padding: 0 15px;
      display: flex;
      width: 100%;
      min-height: 100%;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 10;
    }
  }

  .end {
    position: relative;
    height: 100%;
    display: flex;

    @media screen and (max-width: 991px) {
      flex-flow: column;
      position: absolute;
      top: -500px;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 5;
      transition: all 0.5s ease-in-out;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

      &.open {
        top: 100% !important;
      }
    }
  }

  .shadow {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 500ms ease-in-out;
    display: none;

    @media screen and (max-width: 991px) {
      display: block;
    }
  }
}
</style>
