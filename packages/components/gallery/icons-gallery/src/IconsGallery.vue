<template>
    <div class="vuemodules-icons-gallery">
        <item-grid
            v-for="(icon, index) of icons"
            :key="index"
            :items-per-row="itemsPerRow"
            :items-per-row-mobile="itemsPerRowMobile"
            :height="heightItem"
            :height-mobile="heightItemMobile"
            @click="$emit('click', { index, icon })"
        >
            <img class="logo" :class="{ active: index === active }" :src="icon" alt="icon">
        </item-grid>
    </div>
</template>

<script>
import ItemGrid from "./ItemGrid";

export default {
    name: "icons-gallery",
    props: {
        itemsPerRow: { type: Number, default: 3 },
        itemsPerRowMobile: { type: Number, default: 1 },
        heightItem: { type: String, default: '200px' },
        heightItemMobile: { type: String, default: '100px' },
        icons: { type: Array, default: () => [] },
        active: { type: Number, default: 0 }
    },
    components: {
        ItemGrid
    }
};
</script>

<style lang="scss" scoped>
.vuemodules-icons-gallery {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    padding-bottom: 0;

    .logo {
        width: auto;
        height: 100%;
        filter: grayscale(100%);
        opacity: 0.4;
        transition: all 200ms ease-in-out;

        &.active {
            opacity: 1;
            filter: grayscale(0);
        }
    }
}
</style>
