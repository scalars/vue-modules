<template>
    <card
        :background="background"
        :width="width"
        :height="height"
        class="card-container"
    >
        <custom-label class="header" :background="primary">
            <slot name="header"></slot>
        </custom-label>
        <slot name="background"></slot>
        <custom-label class="footer" :class="{visible: footerVisible}" :background="primary">
            <slot name="footer"></slot>
        </custom-label>
    </card>
</template>

<script>
import Card from './Card';
import CustomLabel from './CustomLabel';

export default {
    name: "simple-card",
    components: {
        Card,
        CustomLabel
    },
    props: {
        primary: { type: String, default: '#ddd' },
        background: { type: String, default: '#ddd' },
        width: { type: String, default: '450px' },
        height: { type: String, default: '350px' },
        footerVisible: { type: Boolean, default: false }
    }
};
</script>

<style lang="scss" scoped>
.card-container {
    position: relative;

    &:hover {
        .footer {
            opacity: 1;
        }
    }

    .header, .footer {
        position: absolute;;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 2;
        transition: opacity 200ms ease-in-out;
    }

    .header {
        top: 0;
    }

    .footer {
        opacity: 0;
        bottom: 0;

        &.visible {
            opacity: 1;
        }
    }
}
</style>
