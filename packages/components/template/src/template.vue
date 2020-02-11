<template>
    <div class="template">{{ template }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'custom-template'
})
export default class CustomTemplate extends Vue {
    @Prop({ default: 'template' }) template:string;
}
</script>

<style scoped lang="scss">
.template {
    background-color: #333;
}
</style>
