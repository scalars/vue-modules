<template>
  <nav @mouseleave="setCurrentItem">
    <ul>
      <MarkerItem
        :widthItem="widthItem"
        :markerPosition="markerPosition"
        :primary="primary"
      />
      <li
        v-for="(link, index) in links"
        :key="index"
        :style="{ width: widthItem + 'px' }"
        @mouseout="setCurrentItem()"
        @mouseover="onHover($event)"
      >
        <a v-if="link.url" :href="link.url" class="link" :target="link.target">
          {{ link.name }}
        </a>
        <a
          v-else-if="link.id"
          v-scroll-to="{ el: link.id, offset: -80 }"
          class="link"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);
import MarkerItem from "./Marker";
export default {
    name: "nav-simple",
    props: {
        links: { type: Array, required: true },
        widthItem: { type: Number, default: 130 },
        fixed: { type: Boolean, default: false },
        primary: { type: String, default: "orange" }
    },
    components: {
        MarkerItem
    },
    data() {
        return {
            markerPosition: "0px"
        };
    },
    mounted() {
        this.setCurrentItem();
    },
    methods: {
        onHover(event) {
            const offsetParent = event.srcElement.parentNode.parentNode.offsetLeft;
            const offsetElement = event.srcElement.offsetLeft;
            this.markerPosition = offsetElement - offsetParent + "px";
        },
        setCurrentItem() {
            this.links.forEach((link, index) => {
                if (link.isActive) {
                    this.markerPosition = index * this.widthItem + "px";
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    height: 100%;
    list-style: none;
    overflow: hidden;
    position: relative;
    background-color: #fff;

    @media screen and (max-width: 991px) {
      flex-flow: column;
      height: auto;
      width: 100%;
    }

    li {
      display: block;
      height: 100%;

      @media screen and (max-width: 991px) {
        height: 70px;
        width: 100% !important;
      }

      a {
        font-size: 0.9em;
        color: #000;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
