<template>
    <custom-button
        class="vuemodules-circular-button"
        :size="size"
        :background-color="backgroundColor"
        :background-hover="backgroundHover"
        :border-size="borderSize"
        :border-color="borderColor"
        :color="color"
        :color-hover="colorHover"
        @click="$emit('click')"
    >
        <div class="content">
            <slot></slot>
        </div>
    </custom-button>
</template>

<script>
import CustomButton from "./CustomButton";

export default {
    name: "circular-button",
    props: {
        size: { default: '50px' },
        backgroundColor: { default: '#fff' },
        backgroundHover: { default: '#ddd' },
        borderSize: { default: '1px' },
        borderColor: { default: 'black' },
        color: { default: 'black' },
        colorHover: { default: '#fff' }
    },
    components: {
        CustomButton
    }
};
</script>

<style lang="scss" scoped>
.vuemodules-circular-button {
    .content {
        position: relative;
        z-index: 1;
    }
}
</style>
