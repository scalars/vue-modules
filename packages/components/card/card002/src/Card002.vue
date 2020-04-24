<template>
    <div class="card001-container" :style="{borderRadius, width, height}" @click="$emit('click')">
        <simple-card
                :primary="backgroundFooter"
                background="#eee"
                :footer-visible="true"
                :footer-overlaped="false"
                :style="{fontSize: fontSize}"
                class="simple-card"
        >
            <div slot="background" class="background" :style="{backgroundImage: `url(${img})`}"/>
            <div slot="footer" :style="{padding, color}">
                <h3 class="title" v-html="title" :style="{ color: titleColor }"/>
                <div class="options">
                    <div class="arrow" :style="{color: accent}" @click="setCurrent(current - 1)">
                        <slot name="left-arrow">&#60;</slot>
                    </div>
                    <div v-for="(option, index) of options" :key="index" class="option" :class="{active: index === current}">
                        <span class="price">{{ option.price }}</span>
                        <span class="label" :style="{color: accent}">{{ option.label }}</span>
                    </div>
                    <div class="arrow" :style="{color: accent}" @click="setCurrent(current + 1)">
                        <slot name="right-arrow">&#62;</slot>
                    </div>
                </div>
            </div>
        </simple-card>
    </div>
</template>

<script>
import SimpleCard from '@vuemodules/simple-card';

export default {
    name: "card001",
    components: {
        SimpleCard
    },
    props: {
        title: { required: true, type: String },
        options: { required: true, type: Array },
        img: { required: true, type: String },
        backgroundFooter: { default: '#fff' },
        fontSize: { default: '1em' },
        color: { default: '#000' },
        titleColor: { default: '#000' },
        borderRadius: { default: '5px' },
        width: { default: '300px' },
        height: { default: '250px' },
        padding: { default: '10px 15px' },
        accent: { default: 'orange' }
    },
    data() {
        return {
            current: 0
        }
    },
    methods: {
        setCurrent (index) {
            if ( index >= 0 && index < this.options.length ) {
                this.current = index;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card001-container {
    overflow: hidden;
}

.simple-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.background {
    width: 100%;
    height: auto;
    background-position: center;
    background-size: cover;
    flex: 1 1 auto;
}

.title {
    font-size: 1.1em;
    margin: 0;
    padding: 0;
    text-align: center;
}

.subtitle {
    font-size: 0.9em;
    margin: 0;
    padding:0;
}

.options {
    display: flex;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .arrow {
        cursor: pointer;
    }

    .option {
        font-size: 0.9em;
        display: none;
        text-align: center;
        flex: 1 1 auto;

        &.active {
            display: block;
        }
    }
}
</style>
