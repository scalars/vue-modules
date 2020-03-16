<template>
    <card :width="width" :height="height">
        <slot name="background" />
        <div class="hover" :style="{ backgroundColor }">
            <slot />
        </div>
    </card>
</template>

<script>
import Card from './Card';
export default {
    name: "hover-card",
    props: {
        width: { type: String, default: '450px' },
        height: { type: String, default: '350px' },
        backgroundColor: { type: String, default: '#8A92FF55' }
    },
    components: {
        Card
    }
};
</script>

<style lang="scss" scoped>
.hover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 200ms ease-in-out;

    &:hover {
        opacity: 1;
    }
}
</style>
