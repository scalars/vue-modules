<template>
    <div class="card003-container" :style="{borderRadius, width, height}" @click="$emit('click')">
        <div class="close-button"
             :style="{backgroundColor:closeButtonColor, fontSize: closeButtonFontSize}"
             @click.stop="$emit('onClose')"
        >
            <slot name="close-button">X</slot>
        </div>
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
                <h3 class="title" v-html="item.title" :style="{ color: titleColor }"/>
                <div class="options">
                    <span class="price">${{item.price}}</span>
                    <span class="presentation" :style="{color: accent}">{{item.presentation}}</span>
                    <input
                            @blur="itemFocus()"
                            class="input"
                            type="number" :min="min" v-model="quantity"
                            :style="{backgroundColor: accent, borderRadius}"
                            @change="$emit('change', quantity)"
                    >
                </div>
                <div class="total"><span>Total:</span> ${{ total }}</div>
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
        item: { required: true, type: Object },
        img: { required: true, type: String },
        backgroundFooter: { default: '#fff' },
        fontSize: { default: '1em' },
        color: { default: '#000' },
        titleColor: { default: '#000' },
        borderRadius: { default: '5px' },
        width: { default: '300px' },
        height: { default: '250px' },
        padding: { default: '10px 15px' },
        accent: { default: 'orange' },
        closeButtonColor: { default: 'red' },
        closeButtonFontSize: { default: '0.9em' },
        min: { type: String, default: '1' }
    },
    mounted () {
        this.quantity = this.item.quantity >= this.min ? this.item.quantity : this.min;
    },
    data() {
        return {
            quantity: this.min
        };
    },
    computed: {
        total () {
            return this.quantity * this.item.price;
        }
    },
    methods: {
        itemFocus () {
            if ( this.quantity <= 0 ) {
                this.quantity = 1;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card003-container {
    overflow: hidden;
    position: relative;
}

.close-button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
    font-size: 1em;
    margin: 0;
    padding: 0;
}

.total span {
    font-size: 0.9em;
}

.options {
    display: flex;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    justify-content: space-between;
    align-items: center;

    .input {
        width: 70px;
        border: none;
        padding: 5px 10px;
        color: #fff;
        font-size: 0.9em;
    }

    .presentation {
        font-size: 0.9em;
    }
}
</style>
