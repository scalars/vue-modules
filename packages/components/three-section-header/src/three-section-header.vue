<template>
  <div class="vuemodules-header">
    Header
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ThreeSectionHeader extends Vue {}
</script>

<style lang="scss">
.vuemodules-header {
  background-color: green;
}
</style>
