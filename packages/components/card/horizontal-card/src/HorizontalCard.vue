<template>
    <div class="container">
        <vueper-slides class="slides">
            <vueper-slide
                v-for="(image, i) in images"
                :key="i"
                :image="image"
            />
        </vueper-slides>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    name: "horizontal-card",
    components: {
        VueperSlides,
        VueperSlide
    },
    props: {
        images: {
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    background-color: var(--primary, #e5fdff);
    border: 1px solid var(--primary-dark, #befaff);
    max-height: 300px;
    margin-bottom: 20px;

    @media screen and (max-width: 991px) {
        flex-flow: column;
        max-height: none;
        height: auto;
    }

    .slides::v-deep {
        display: flex;
        width: 300px;
        max-width: 300px;
        min-width: 300px;
        height: 300px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        flex: 1 1 auto;

        @media screen and (max-width: 991px) {
            width: 100%;
            max-width: 100%;
        }

        .vueperslides__inner {
            width: 100%;
            height: 100%;

            .vueperslides__parallax-wrapper {
                height: 100%;
                padding-bottom: 0 !important;
            }
        }
    }

    .content {
        padding: 10px 30px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-bottom: 50px;
        position: relative;
        flex: 1 1 auto;
    }
}
</style>
