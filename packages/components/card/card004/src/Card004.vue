<template>
    <div class="card004-container" :style="{width, height, borderRadius}" @click="$emit('click')">
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
                <div class="title-wrapper" v-if="item.title">
                    <h3 class="title" v-html="item.title" :style="{ color: accent }"/>
                </div>
                <div v-if="item.price || item.description" class="options">
                    <span class="price" v-if="item.price">${{item.price}}</span>
                    <span class="description" :style="{color: accent}" v-if="item.description">
                        {{item.description}}
                    </span>
                </div>
                <div class="buttons" :style="{color: titleColor}" v-if="textPrimaryButton || textSecondaryButton">
                    <div
                        class="button"
                        v-if="textSecondaryButton"
                        :style="{
                            borderRadius,
                            marginRight: textPrimaryButton ? '5px' : '',
                            ...styleSecondaryButton
                        }"
                        v-html="textSecondaryButton"
                        @click.stop="$emit('clickSecondary')"
                    />
                    <div
                        class="button"
                        v-if="textPrimaryButton"
                        :style="{
                            borderRadius,
                            marginLeft: textSecondaryButton ? '5px' : '',
                            ...stylePrimaryButton
                        }"
                        v-html="textPrimaryButton"
                        @click.stop="$emit('clickPrimary')"
                    />
                </div>
                <div v-if="item.restaurant" class="place" v-html="item.restaurant" />
            </div>
        </simple-card>
    </div>
</template>

<script>
import SimpleCard from '@vuemodules/simple-card';

export default {
    name: "card004",
    components: {
        SimpleCard
    },
    props: {
        item: { required: true, type: Object },
        img: { required: true, type: String },
        textPrimaryButton: { type: String },
        textSecondaryButton: { type: String },
        stylePrimaryButton: { type: Object, default: () => ({ backgroundColor: 'teal' }) },
        styleSecondaryButton: { type: Object, default: () => ({ backgroundColor: 'teal' }) },
        width: { default: '250px' },
        height: { default: '300px' },
        fontSize: { default: '1em' },
        color: { default: '#000' },
        titleColor: { default: '#fff' },
        borderRadius: { default: '8px' },
        accent: { default:  'teal' },
        backgroundFooter: { default: '#fff' },
        padding: { default: '10px 15px' },
        button : { default: '0 0 8px 8px'}
    }
};
</script>
<style lang="scss" scoped>
.card004-container {
    overflow: hidden;
    position: relative;
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

.price {
    font-size: 0.98em;
}

.title-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;

    .title {
        font-size: 1.1em;
        margin: 0;
        padding: 0;
    }

}

.options{
    display: flex;
    align-items: center;

    .description {
        margin-left: 15px;
        font-size: 0.8em;
    }
}


.buttons {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin: 5px 0px;

    .button {
        flex: 1 1 auto;
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
}

.place{
    font-size: 0.8em;
}
</style>
