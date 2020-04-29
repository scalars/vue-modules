<template>
    <div
        class="card-slider"
        v-touch:swipe.left="next"
        v-touch:swipe.right="prev"
    >
        <div class="wrapper" :style="{'--cardWidth': cardWidth, transform: `translateX( calc( ( ${cardWidth} + 20px ) * -${current} - ${cardWidth} / 2 ) )` }">
            <slot />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vue2TouchEvents);

export default {
    name: "card-slider",
    props: {
        cardWidth: { default: '300px' }
    },
    data() {
        return {
            current: 0
        }
    },
    mounted () {
        this.$slots.default.forEach( ( item, index ) => {
            item.elm.classList.add('card-item');
            item.onclick = () => {
                console.log('clicked');
                this.current = index;
            };
        } );
        this.$slots.default[this.current].elm.classList.add( 'active' );
    },
    watch : {
        current ( value, old ) {
            this.$slots.default[old].elm.classList.remove( 'active' );
            this.$slots.default[value].elm.classList.add( 'active' );
        }
    },
    methods: {
        next ( ) {
            if ( this.current + 1 < this.$slots.default.length ) {
                this.current = this.current + 1;
            }
        },
        prev ( ) {
            if ( this.current - 1 >= 0 ) {
                this.current = this.current - 1;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card-slider::v-deep {
    position: relative;
    padding: 20px 20px 20px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .wrapper {
        position: relative;
        width: auto;
        height: 100%;
        display: flex;
        transition: all 200ms ease-in-out;
        left: 50%;

        & > .card-item {
            margin-left: 20px;
            min-width: var(--cardWidth);
            max-width: var(--cardWidth);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            transition: all 200ms ease-in-out;

            &.active {
                box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
                transform: translateY(-10px);
            }
        }
    }
}
</style>
