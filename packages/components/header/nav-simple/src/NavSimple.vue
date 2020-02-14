<template>
  <nav @mouseleave="setCurrentItem">
    <ul>
      <div class="marker" :style="{width: widthItem, left: markerPosition}" />
      <li v-for="(link, index) in links" :key="index" :style="{width: widthItem}" @mouseover="onHover($event)">
        <a v-if="($router.currentRoute.fullPath == lang && link.url == 'index') || lang+'/'+link.url == $router.currentRoute.fullPath" v-scroll-to="{el:link.id, offset: -80}" class="link">{{ link.name }}</a>
        <a v-else-if="!($router.currentRoute.fullPath == lang && link.url == 'index') && lang+'/'+link.url != $router.currentRoute.fullPath" href="linkToPath(link.url)" class="link" @click="setCurrentItem">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      links: { type: Array, required: true },
      widthItem: { type: String, default: '130px' },
      fixed: { type: Boolean, default: false },
      linkToPath:{default: function (link) {
          return (props) => {}
        }},
      $router: {default: function () {
          return {currentRoute: {}}
        }},
      $eventBus: {default: function () {
          return {$on: () => {}}
        }},
      $i18n: {default: function () {
          return {loadedLanguages: []}
        }},
    },
    data () {
      return {
        markerPosition: '-' + this.widthItem
      };
    },
    computed: {
      lang() {
        return this.$i18n.loadedLanguages[0] === this.$i18n.defaultLocale ? '/' : '/' + this.$i18n.loadedLanguages[0];
      }
    },
    mounted () {
      this.setCurrentItem();
      const self = this;
      this.$eventBus.$on('reset-nav', function () {
        self.markerPosition = '-' + self.widthItem;
      });
    },
    methods: {
      onHover(event) {
        const offsetParent = event.srcElement.parentNode.parentNode.offsetLeft;
        const offsetElement = event.srcElement.offsetLeft;
        this.markerPosition = (offsetElement - offsetParent) + 'px';
      },
      setCurrentItem() {
        for (let i = 0; i < this.links.length; i++) {
          const numero = this.widthItem.match(/^\d+/g);
          if (this.$router.currentRoute.fullPath === this.lang && this.links[i].url === 'index') {
            this.markerPosition = (i * parseInt(numero[0])) + 'px';
          } else if ((this.lang !== '/' ? this.lang : '') + '/' + this.links[i].url === this.$router.currentRoute.fullPath) {
            this.markerPosition = (i * parseInt(numero[0])) + 'px';
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $primary: red;
  nav {
    height: 100%;
    position: relative;

    @media screen and (max-width: 991px){
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

        @media screen and (max-width: 991px){
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

    .marker {
      position: absolute;
      height: 3px;
      background-color: $primary;
      background: linear-gradient(to right, transparent 0%, rgba(saturate($primary, 50%), 0.7) 50%, transparent 100%);
      border-radius: 50%;
      bottom: 0;
      left: 0;
      transition: all 0.2s ease-in-out;

      @media screen and (max-width: 991px){
        display: none;
      }
    }
  }
</style>
