<template>
    <div class="vuemodules-user">
        <div class="image" :style="{ backgroundImage: `url(${img})`, width: imageSize, height: imageSize }"/>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "minimalist-user",
    props: {
        imageSize: { type: String, default: '80px' },
        img: { type: String, required: true }
    }
};
</script>

<style lang="scss" scoped>
.vuemodules-user {
    display: flex;

    .image {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
    }

    .content {
        display: flex;
        flex-flow: column;
        width: auto;
        justify-content: center;
        min-height: 100%;
        margin-left: 10px;
    }
}
</style>
