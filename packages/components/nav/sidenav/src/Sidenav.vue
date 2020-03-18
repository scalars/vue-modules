<template>
    <div class="vuemodules-sidenav">
        <div v-if="overlap && show" class="over" :class="{ opened: (show && overlap) }" />
        <sidenav-wrapper :width="width" :side="side" :show="show" :overlap="overlap" :background="background">
            <slot name="sidenav"></slot>
        </sidenav-wrapper>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import SidenavWrapper from "./SidenavWrapper";
export default {
    name: "sidenav",
    props: {
        width: { type: String, default: '300px' },
        side: { type: String, default: 'left' },
        overlap: { type: Boolean, default: false },
        show: { type: Boolean, default: false },
        background: { type: String, default: '#fff' }
    },
    components: {
        SidenavWrapper
    }
};
</script>

<style lang="scss" scoped>
.vuemodules-sidenav {
    display: flex;
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;

    .over {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 200ms ease-in-out;
        background-color: rgba(0, 0, 0, 0.5);

        &.opened {
            animation: fade 50ms ease-in-out forwards;
            animation-delay: 150ms;
        }
    }

    .content {
        position: relative;
        min-height: 100vh;
        flex: 1 1 auto;
        z-index: 1;
    }
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
