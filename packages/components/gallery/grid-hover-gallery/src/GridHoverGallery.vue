<template>
    <div class="grid-hover-gallery">
        <item-grid
            v-for="(item, index) of items"
            :key="index"
            :items-per-row="itemsPerRow"
            :items-per-row-mobile="itemsPerRowMobile"
        >
            <hover-card
                width="100%"
                :height="itemsHeight"
                :background-color="backgroundItem"
                class="item"
            >
                <div slot="background" class="background" :style="{backgroundImage: `url(${item.img})`}"/>
                <a class="card-content" :href="item.link">
                    <span v-html="item.icon"></span>
                    {{ item.text }}
                </a>
            </hover-card>
        </item-grid>
    </div>
</template>

<script>
import HoverCard from '@vuemodules/hover-card';
import ItemGrid from "./ItemGrid";
export default {
    name: "grid-hover-gallery",
    props: {
        items: { default: () => [] },
        itemsPerRow: { type: Number, default: 3 },
        itemsPerRowMobile: { type: Number, default: 1 },
        itemsHeight: { type: String, default: '200px' },
        backgroundItem: { type: String, default: 'rgba(103, 178, 254, 0.4)' }
    },
    components: {
        HoverCard,
        ItemGrid
    }
};
</script>

<style lang="scss" scoped>
.grid-hover-gallery {
    display: flex;
    flex-flow: wrap;
}

.item:hover .background {
    transform: scale(1.02);
}

.background {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 200ms ease-in-out;
}

.card-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    color: #fff;
    text-decoration: none;
}
</style>
