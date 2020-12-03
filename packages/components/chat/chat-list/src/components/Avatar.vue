<template>
    <div class="avatar-container">
        <div
            v-if="withDefaultImage"
            class="avatar-wrapper"
            :style="{
                backgroundImage: `url(${pictureUrl})`,
                minWidth: size,
                width: size,
                height: size
            }"
            @click="$emit('click')"
        >
            <div v-if="action" class="icon-wrapper" :style="{ top: `calc( 50% - ${x}px )`, left: `calc( 50% + ${y}px )`}">
                <v-icon class="icon" color="#fff" @click.stop="$emit( 'action' )">
                    {{ icon }}
                </v-icon>
            </div>
        </div>
        <span v-if="label" class="label small-font">{{ label }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
    @Prop( {required: true} ) pictureUrl: string;
    @Prop( {} ) label: string;
    @Prop( { default: 'mdi-fire' } ) icon: string;
    @Prop( { default: '82px' } ) size: string;
    @Prop( { default: 45 } ) angle: number;
    @Prop( { default: true } ) action: boolean;
    @Prop( { default: true } ) withDefaultImage: boolean;

    get x () {
        return this.radius * Math.cos( this.radian( this.angle ) );
    }

    get y () {
        return this.radius * Math.sin( this.radian( this.angle ) );
    }

    get radius () {
        return parseInt( this.size.replace( 'px', '' ) ) / 2.0;
    }

    radian ( angle: number ) {
        return angle * Math.PI / 180;
    }
}

</script>

<style lang="scss" scoped>
.avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .label {
        color: red;
    }

    .avatar-wrapper {
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
        position: relative;

        .icon-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            transform: translate( -50%, -50% );

            .icon {
                font-size: 0.95em;
            }

            //@media #{$mobile} {
            //  width: 25px;
            //  height: 25px;
            //
            //  .icon {
            //    font-size: 1.5em;
            //  }
            //}
        }
    }
}
</style>
