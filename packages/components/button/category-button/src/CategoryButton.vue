<template>
    <div class="category-button" :style="{borderRadius, width, height, padding, backgroundColor: background, color}" @click="$emit('click')">
        <div :style="{fontSize: iconSize}" class="icon" v-html="icon"/>
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: "category-button",
    props: {
        icon: { type: String, required: true },
        title: { type: String, required: true },
        borderRadius: { default: '5px' },
        width: { default: 'auto' },
        height: { default: 'auto' },
        padding: { default: '15px' },
        background: { default: '#fff' },
        color: { default: "#000" },
        iconSize: { default: "2rem" }
    }
};
</script>

<style lang="scss" scoped>
.category-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
