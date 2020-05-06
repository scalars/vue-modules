<template>
    <div
        ref="item-carousel"
        class="item-carousel"
        v-hammer:pan="dragging"
        v-hammer:panstart="dragStart"
        v-hammer:panend="dragEnd"
    >
        <div ref="items" class="items" :style="{left: `${position}px`}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { VueHammer } from 'vue2-hammer';

VueHammer.config = {
    pinch: { enable: false },
    rotate: { enable: false },
    swipe: { enable: false },
    pan: { direction: 6 }
}

Vue.use( VueHammer );

export default {
    name: "item-carousel",
    data() {
        return {
            position: 0,
            initialDragging: 0
        }
    },
    methods: {
        dragStart(event) {
            this.initialDragging = event.center.x;
            this.$emit('dragStart');
        },
        dragging(event) {
            const widthContainer = this.$refs['item-carousel'].offsetWidth;
            let widthItems = 0;
            this.$slots.default.forEach(item => {
                const marginLeft = Number(window.getComputedStyle(item.elm).marginLeft.replace(/[A-Z%a-z]/g, ''))
                const marginRight = Number(window.getComputedStyle(item.elm).marginRight.replace(/[A-Z%a-z]/g, ''))
                widthItems += item.elm.offsetWidth + marginLeft + marginRight
            });
            const offset = event.center.x - this.initialDragging;
            if (this.position + offset > 0 || widthContainer >= widthItems) {
                this.position = 0;
            } else if (this.position + offset < widthContainer - widthItems) {
                this.position = widthContainer - widthItems;
            } else {
                this.position = this.position + offset;
            }
            this.initialDragging = event.center.x;
        },
        dragEnd() {
            this.$emit('dragEnd');
        }
    }
};
</script>

<style lang="scss" scoped>
.item-carousel {
    cursor: move;
    position: relative;
    overflow: hidden;
}

.items {
    display: flex;
    position: relative;
    width: auto;
}
</style>
