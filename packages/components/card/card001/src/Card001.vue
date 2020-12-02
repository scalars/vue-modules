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
                <h3 class="title" v-html="title" />
                <span class="subtitle" v-html="subtitle" />
            </div>
        </simple-card>
    </div>
</template>

<script lang="ts">
import SimpleCard from '@vuemodules/simple-card';

export default {
    name: "card001",
    components: {
        SimpleCard
    },
    props: {
        title: { required: true, type: String },
        subtitle: { required: true, type: String },
        img: { required: true, type: String },
        backgroundFooter: { default: '#fff' },
        fontSize: { default: '1em' },
        color: { default: '#000' },
        borderRadius: { default: '5px' },
        width: { default: '300px' },
        height: { default: '250px' },
        padding: { default: '10px 15px' }
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
    font-size: 1em;
    margin: 0;
    padding: 0;
}

.subtitle {
    font-size: 0.9em;
    margin: 0;
    padding:0;
}
</style>
