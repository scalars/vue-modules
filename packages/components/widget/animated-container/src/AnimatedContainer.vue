<template>
    <container
        class="vuemodules-animated-container"
        :class="{ open }"
        :width="width"
        :height="height"
        :background="background"
        :position="position"
        :center="center"
        :size-open="sizeOpen"
        :duration="duration"
    >
        <slot></slot>
    </container>
</template>

<script>
import Container from './Container';

export default {
    name: "animated-container",
    props: {
        center: { default: () => ( { x: '0', y: '0'} ) },
        open: { default: false },
        width: { default: '100vw' },
        height: { default: '100vh' },
        background: { default: 'transparent' },
        position: { default: 'relative' },
        sizeOpen: { default: '1920px' },
        duration: { default: 1000 }
    },
    components: {
        Container
    }
};
</script>

<style lang="scss" scoped></style>
