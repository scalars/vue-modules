<template>
  <div
          class="header"
          :style="{ height: height, position: fixed ? 'fixed' : 'relative' }"
  >
    <div class="wrapper">
      <div class="start">
        <slot class="start" />
        <span class="d-lg-none menu-icon" @click="toggleMenu">
                    <div v-if="icon" v-html="icon" />
                    <MenuIcon v-if="!icon" />
                </span>
      </div>
      <div class="end" :class="{'open':openMenu}" @click="toggleMenu">
        <slot name="center">
          <div />
        </slot>
        <slot name="end">
          <div />
        </slot>
      </div>
      <div class="shadow" :style="{top:openMenu?'0':'-100vh'}" @click="toggleMenu" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Prop, Component, Vue } from 'nuxt-property-decorator';
  // @ts-ignore
  import MenuIcon from '@/assets/menu_icon_2.svg';
  @Component({
    components: {
      MenuIcon
    }
  })
  class Header002 extends Vue {
    // Parameters
    @Prop({ type: String, default: '60px' }) height: string;
    @Prop({ type: Boolean, default: false }) fixed: boolean;
    @Prop({ type: String, default: null }) icon: string;
    // data
    openMenu:boolean = false;
    // methods
    toggleMenu () {
      this.openMenu = !this.openMenu;
    }
  }

  export default Header002;

</script>

<style lang="scss" scoped>
  @import '@/assets/css/palette.scss';

  .header {
    width: 100%;
    padding: 0px 15px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    position: relative;
    z-index: 5;

    @media screen and (max-width: 991px){
      flex-flow: column;
      padding: 0px;
      box-shadow: none;
      box-sizing: border-box;

      &::before {
        content: " ";
        width: 100%;
        height: 2px;
        background-color: rgba(darken($primary, 10), 0.6);
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 11;
      }
    }

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
  }

  .menu-icon {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3), 0 0 0 7px rgba(darken($primary, 10), 0.6);
    cursor: pointer;
    margin-right: 10px;
    color: $primary;

    svg {
      width: 60%;
      height: 60%;
      fill: $primary;
    }
  }
</style>
