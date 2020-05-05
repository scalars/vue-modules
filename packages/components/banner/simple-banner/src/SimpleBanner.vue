<template>
    <simple-banner-wrapper
        :width="width"
        :height="height"
        :height-mobile="heightMobile"
        v-hammer:swipe="onSwipe"
    >
        <div class="left-icon" @click="setActive(active - 1)">
            <slot name="left-icon">&lt;</slot>
        </div>
        <div class="right-icon" @click="setActive(active + 1)">
            <slot name="right-icon">&gt;</slot>
        </div>
        <div
            class="slide"
            v-for="(item, index) of items"
            :key="index"
            :style="{
                backgroundImage: `url(${item.image})`,
                left: `calc( -100% * (${active}) )`
            }"
        >
            <div v-if="hasContent(item)" class="content" :style="styleContent">
                <div v-if="item.title" class="title" :style="styleTitle">{{item.title}}</div>
                <div v-if="item.text" class="text" :style="styleText">{{item.text}}</div>
                <a v-if="item.link" class="link" :style="styleLink" :href="item.link.url">{{item.link.text}}</a>
            </div>
        </div>
    </simple-banner-wrapper>
</template>

<script>
import Vue from 'vue';
import { VueHammer } from 'vue2-hammer';
import SimpleBannerWrapper from "./SimpleBannerWrapper";

VueHammer.config = {
    pinch: { enable: false },
    rotate: { enable: false },
    pan: { enable: false },
    swipe: { direction: 6 }
}

Vue.use(VueHammer);

export default {
    name: "simple-banner",
    props: {
        items: { type: Array, default: () => [] },
        width: { type: String, default: '100%' },
        height: { type: String, default: '500px' },
        heightMobile: { type: String, default: '300px' },
        styleContent: { type: Object, default: () => ({}) },
        styleTitle: { type: Object, default: () => ({}) },
        styleText: { type: Object, default: () => ({}) },
        styleLink: { type: Object, default: () => ({}) }
    },
    components: {
        SimpleBannerWrapper
    },
    data() {
        return {
            active: 0
        }
    },
    methods: {
        onSwipe(event) {
            if (event.direction === 2) {
                this.setActive(this.active + 1)
            } else if (event.direction === 4) {
                this.setActive(this.active - 1)
            }
        },
        setActive(index) {
            if (index < 0) {
                this.active = this.items.length - 1;
            } else if (index >= this.items.length) {
                this.active = 0;
            } else {
                this.active = index;
            }
        },
        hasContent(item) {
            return item.title || item.text || item.link;
        }
    }
};
</script>

<style lang="scss" scoped>
.left-icon, .right-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    z-index: 1;
    color: #fff;
    cursor: pointer;
}

.left-icon {
    left: 0;
}

.right-icon {
    right: 0;
}

.slide {
    width: 100%;
    height: 100%;
    min-width: 100%;
    flex: 1 1 auto;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: left 200ms ease-in-out;

    .content {
        display: block;
        width:100%;
        max-width: 500px;
        max-height: 100%;
        padding: 20px;
        position: absolute;
        flex-direction: column;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;

        .title {
            font-size: 1.3em;
            font-weight: bold;
        }

        .link {
            display: inline-block;
            width: auto;
            padding: 10px 15px;
            background-color: var(--primary, teal);
            color: #fff;
            text-decoration: none;
            margin-top: 10px;
            align-self: flex-end;
        }
    }
}
</style>
