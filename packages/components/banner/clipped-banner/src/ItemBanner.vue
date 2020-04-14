<template>
    <item
        :width="width"
        :active-width="activeWidth"
        :active="active"
        :background="background"
        :clip-size="clipSize"
        class="item"
        :class="{hover: !active}"
        @click="$emit('click')"
    >
        <div
            class="overlap"
            :style="{
                '--active-color': overlapActiveColor,
                backgroundColor: active ? overlapActiveColor : overlapInactiveColor
            }"
        />
        <div class="content" :class="{'item-hidden': !active}">
            <item-content :margin="clipSize">
                <slot></slot>
            </item-content>
        </div>
    </item>
</template>

<script>
import Item from "./Item";
import ItemContent from "./Content";
export default {
    name: "item-banner",
    props: {
        width: { type: String, default: '100px' },
        activeWidth: { type: String, default: '400px' },
        active: { type: Boolean, default: false },
        background: { type: String },
        clipSize: { type: String, default: '10px' },
        overlapActiveColor: { type: String, default: 'transparent' },
        overlapInactiveColor: { type: String, default: 'rgba(0, 0, 0, 0.2)' }
    },
    components: {
        Item,
        ItemContent
    }
};
</script>

<style lang="scss" scoped>
.overlap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 200ms ease-in-out;

    @media screen and (max-width: 991px) {
        background-color: var(--active-color) !important;
    }
}

.item {
    &.hover:hover {
        filter: brightness(1.2);
    }

    &:first-child {
        margin-left: 0;
        clip-path: none;
    }
}

.content {
    position: relative;
    opacity: 1;
    transition: opacity 200ms ease-in-out;
    height: 100%;
    z-index: 2;
    &.item-hidden {
        opacity: 0;

        @media screen and (max-width: 991px) {
            opacity: 1;
        }
    }

    @media screen and (max-width: 991px) {
        height: auto;
    }
}
</style>
