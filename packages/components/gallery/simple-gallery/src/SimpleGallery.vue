<template>
    <gallery :width="width" :height="height" ref="vm_galleryContainer" class="gallery-container">
        <div class="controls"
             v-touch:swipe.left="next"
             v-touch:swipe.right="prev"
        >
            <div class="control left" @click="prev"><slot name="left-icon">&lt;</slot></div>
            <div class="control right" @click="next"><slot name="right-icon">&gt;</slot></div>
        </div>
        <div class="carousel" :style="{left: `${offsetLeft}px`}">
            <div
                v-for="(image, index) of images"
                :key="`${image}-${index}`"
                class="wrapper"
                :style="{'min-width': `${containerWidth}px`, 'max-width': `${containerWidth}px`, 'min-height': height, 'max-height': height}"
            >
                <img class="image" :src="image" alt="">
            </div>
        </div>
    </gallery>
</template>

<script>
import Gallery from './Gallery';
import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vue2TouchEvents);

export default {
    name: "simple-gallery",
    components: {
        Gallery
    },
    props: {
        width: { type: String, default: '100%' },
        height: { type: String, default: '100%' },
        images: { default: () => ([]) },
        continuous: { type: Boolean, default: false }
    },
    data() {
        return {
            activeItem: 0,
            containerWidth: 0,
            container: null,
            offsetLeft: 0,
        }
    },
    watch: {
        width() {
            this.$nextTick().then(() => {
                this.containerWidth = this.$refs.vm_galleryContainer.$el.clientWidth;
                this.offsetLeft = -this.activeItem * this.containerWidth;
            });
        },
        activeItem() {
            this.offsetLeft = -this.activeItem * this.containerWidth;
        }
    },
    mounted() {
        this.$nextTick().then(() => {
            this.containerWidth = this.$refs.vm_galleryContainer.$el.clientWidth;
        });
    },
    methods: {
        setActive(active) {
            if (active < 0 && this.continuous) {
                this.activeItem = this.images.length - 1;
            } else if (active >= this.images.length && this.continuous) {
                this.activeItem = 0;
            } else if (active >= 0 && active < this.images.length ) {
                this.activeItem = active;
            }
        },
        next() {
            this.setActive(this.activeItem + 1);
        },
        prev() {
            this.setActive(this.activeItem - 1);
        }
    }
};
</script>

<style lang="scss" scoped>
.gallery-container {
    position: relative;

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;

        &:hover .control {
            opacity: 1;
        }

        .control {
            padding: 15px;
            color: #fff;
            opacity: 0;
            text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
            cursor: pointer;
            transition: opacity 200ms ease-in-out;
        }
    }

    .carousel {
        display: flex;
        width: auto;
        height: 100%;
        position: absolute;
        top: 0;
        transition: left 300ms ease-in-out;

        .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1 auto;
            overflow: hidden;

            .image {
                min-height: 100%;
                max-height: 100%;
            }
        }
    }
}
</style>
