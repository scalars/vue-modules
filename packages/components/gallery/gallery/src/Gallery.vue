<template>
    <div
        ref="gallery"
        class="gallery-container"
        :style="{
            width: galleryConfig.width,
            height: `calc( ${galleryConfig.height} + ${ miniatureConfig.height } + ${galleryConfig.spaceToMiniatures} )`
        }"
    >
        <div
            class="slider"
            :style="{
                width: galleryConfig.width,
                height: galleryConfig.height,
                marginBottom: galleryConfig.spaceToMiniatures
            }"
        >
            <div
                class="fullScreen-wrapper"
                v-hammer:swipe="changeActive"
                v-hammer:panstart="dragZoomStart"
                v-hammer:pan="draggingZoom"
                @dblclick="toggleZoom"
                :class="{active: fullScreen}"
                :style="{
                    width: galleryConfig.width,
                    height: galleryConfig.height
                }"
            >
                <div v-if="!fullScreen" class="fullScreen-icon" @click="toggleFullScreen">
                    <slot name="fullScreen-icon">+</slot>
                </div>
                <div v-if="fullScreen" class="close-icon" @click="toggleFullScreen"
                     :style="{
                        top: closeIconCoords.top,
                        left: closeIconCoords.left,
                        right: closeIconCoords.right,
                        bottom: closeIconCoords.bottom
                     }"
                >
                    <slot name="close-icon">X</slot>
                </div>
                <div v-if="!zoom" class="prev-icon" @click="changeActive({direction: 4})">
                    <slot name="left-icon">&lt;</slot>
                </div>
                <div v-if="!zoom" class="next-icon" @click="changeActive({direction: 2})">
                    <slot name="right-icon">&gt;</slot>
                </div>
                <div
                    v-for="(image,index) of images"
                    :key="index"
                    class="image"
                    :style="{
                        backgroundImage: `url(${image})`,
                        borderRadius: galleryConfig.borderRadius,
                        left: fullScreen ? '50%' : `calc( ${ galleryConfig.width } * ${-active} )`,
                        opacity: active === index ? '1' : '0',
                        transform: fullScreen && zoom
                            ? `translate( calc( -50% + ${zoomPosition.left}px ), calc( -50% + ${zoomPosition.top}px ) ) scale(2)`
                            : fullScreen ? 'translate(-50%, -50%)' : 'none'
                    }"
                />
            </div>
        </div>
        <div
            class="miniatures"
            v-hammer:panstart="dragStart"
            v-hammer:pan="dragging"
            v-hammer:panend="dragEnd"
        >
            <div
                v-for="(image,index) of images"
                :key="index"
                class="miniature"
                @click="setActive(index)"
                :class="{active: active === index}"
                :style="{
                    width: `${miniatureConfig.width}px`,
                    minWidth: `${miniatureConfig.width}px`,
                    height: `${miniatureConfig.height}px`,
                    marginRight: `${miniatureConfig.space}px`,
                    backgroundImage: `url(${image})`,
                    borderRadius: miniatureConfig.borderRadius,
                    left: `${miniaturesPosition}px`
                }"
            />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { VueHammer } from 'vue2-hammer';
VueHammer.config = {
    pinch: { enable: false },
    rotate: { enable: false },
    swipe: { direction: 6 }
}
Vue.use(VueHammer);

export default {
    name: "gallery",
    props: {
        images: { required: true, type: Array },
        galleryConfig: { type: Object, default: () => ( {
            width: '100%',
            height: '300px',
            spaceToMiniatures: '10px',
            borderRadius: '5px'
        } ) },
        miniatureConfig: { type: Object, default: () => ( {
            width: 100,
            height: 80,
            space: 10,
            borderRadius: '5px'
        } ) },
        closeIconCoords: { type: Object, default: () => ({top: '0', right: '0'}) }
    },
    data() {
        return {
            active: 0,
            miniaturesPosition: 0,
            initialDrag: 0,
            hammering: false,
            fullScreen: false,
            zoom: false,
            zoomPosition: {
                initialLeft: 0,
                left: 0,
                initialTop: 0,
                top: 0
            }
        }
    },
    methods: {
        dragStart( event ) {
            this.initialDrag = event.center.x
            this.hammering = true;
        },
        dragging ( event ) {
            const offset = event.center.x - this.initialDrag
            const containerWidth = this.$refs.gallery.offsetWidth;
            if ( containerWidth < this.images.length * (this.miniatureConfig.width + this.miniatureConfig.space) - this.miniatureConfig.space ) {
                if (this.miniaturesPosition + offset > 0) {
                    this.miniaturesPosition = 0;
                } else if ( this.miniaturesPosition + offset < (-(this.miniatureConfig.width + this.miniatureConfig.space) * this.images.length) + containerWidth + this.miniatureConfig.space ) {
                    this.miniaturesPosition = (-(this.miniatureConfig.width + this.miniatureConfig.space) * this.images.length) + containerWidth + this.miniatureConfig.space;
                } else {
                    this.miniaturesPosition += offset
                }
                this.initialDrag = event.center.x
            }
        },
        dragEnd() {
            setTimeout(() => {
                this.hammering = false
            }, 50)
        },
        dragZoomStart ( event ) {
            this.zoomPosition.initialLeft = event.center.x;
            this.zoomPosition.initialTop = event.center.y;
        },
        draggingZoom ( event ) {
            if (this.zoom) {
                const offsetX = event.center.x - this.zoomPosition.initialLeft;
                const offsetY = event.center.y - this.zoomPosition.initialTop;
                switch (event.direction) {
                case 8: // top
                case 16: // bottom
                    const height = event.target.offsetHeight;
                    const newPosY = this.zoomPosition.top + offsetY;
                    if (newPosY >= -height && newPosY <= height) {
                        this.zoomPosition.top = newPosY;
                    }
                    break;
                case 2: // left
                case 4: // right
                    const width = event.target.offsetWidth;
                    const newPosX = this.zoomPosition.left + offsetX;
                    if (newPosX >= -width && newPosX <= width) {
                        this.zoomPosition.left = newPosX;
                    }
                    break;
                }
                this.zoomPosition.initialLeft = event.center.x;
                this.zoomPosition.initialTop = event.center.y;
            }
        },
        setActive(index) {
            if (!this.hammering) {
                this.active = index;
            }
        },
        changeActive( event ) {
            if (!this.zoom) {
                if ( event.direction === 2 && this.active + 1 < this.images.length ) {
                    this.active += 1
                } else if ( event.direction === 4 && this.active - 1 >= 0 ) {
                    this.active -= 1
                }
            }
        },
        toggleFullScreen() {
            this.fullScreen = !this.fullScreen;
            this.zoom = false;
        },
        toggleZoom() {
            if (this.fullScreen) {
                this.zoom = !this.zoom;
                if (!this.zoom) {
                    this.zoomPosition.left = 0;
                    this.zoomPosition.top = 0;
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.gallery-container {
    position: relative;
}

.slider {
    display: flex;
    position: relative;

    .image {
        width: 100%;
        min-width: 100%;
        height: 100%;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 200ms ease-in-out;
    }

    .fullScreen-wrapper {
        display: flex;
        position: absolute;
        overflow: hidden;
        z-index: 100000;
        transition: all 100ms ease-in-out;

        &.active {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw!important;
            height: 100vh!important;
            background-color: rgba(0, 0, 0, 0.9);

            .image {
                position: absolute;
                max-width: 80%;
                min-width: 80%;
                max-height: 80%;
                top: 50%;
                background-size: contain;
            }

            .prev-icon {
                left: 3%;
            }

            .next-icon {
                right: 3%;
            }
        }

        &:hover {
            .fullScreen-icon {
                opacity: 1;
            }

            .prev-icon, .next-icon {
                opacity: 1;
            }
        }

        .fullScreen-icon {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 1;
            padding: 15px;
            cursor: pointer;
            opacity: 0;
            transition: all 200ms ease-in-out;

            @media screen and (max-width: 991px) {
                opacity: 1;
            }
        }

        .close-icon {
            position: absolute;
            z-index: 1;
            padding: 15px;
            cursor: pointer;
        }

        .prev-icon, .next-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            padding: 15px;
            cursor: pointer;
            opacity: 0;
            transition: all 200ms ease-in-out;
        }

        .prev-icon {
            left: 0;
        }

        .next-icon {
            right: 0;
        }
    }
}

.miniatures {
    display: flex;
    position: relative;
    width: 100%;
    overflow: hidden;

    .miniature {
        background-size: cover;
        background-position: center;
        cursor: pointer;
        position: relative;

        &.active {
            overflow: hidden;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.5;
                background-color: var(--primary, teal);
            }
        }
    }
}
</style>
