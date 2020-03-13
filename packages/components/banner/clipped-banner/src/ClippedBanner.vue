<template>
    <carousel :height="height">
        <div class="banner" >
            <slot :width="itemWidth" :active-width="itemActiveWidth"></slot>
        </div>
    </carousel>
</template>

<script>
import Carousel from './Carousel';
export default {
    name: "clipped-banner",
    props: {
        height: { type: String, default: '450px' },
        itemWidth: { type: String, default: '100px' },
        itemActiveWidth: { type: String, default: '400px' }
    },
    components: {
        Carousel
    }
};
</script>

<style lang="scss" scoped>
.banner {
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 991px) {
        flex-flow: column;
        height: auto;
        position: relative;
    }
}
</style>
