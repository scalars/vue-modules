<template>
    <div class="container">
        <!--    <Gallery002 class="gallery" :data="images" :per-page="{mobile:1,desktop:1}" />-->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "horizontal-card",
    props: {
        images: {
            required: true
        },
        text: {
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
$height: 300px;
.container {
    display: flex;
    background-color: var(--primary, #e5fdff);
    border: 1px solid var(--primary-dark, #befaff);
    max-height: $height;
    margin-bottom: 20px;

    @media screen and (max-width: 991px) {
        flex-flow: column;
        max-height: none;
        height: auto;
    }

    &:hover > .gallery > img {
        transform: scale(1.1, 1.1);
    }

    .gallery {
        display: flex;
        width: $height;
        min-width: $height;
        height: $height;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        flex: 1 1 auto;

        @media screen and (max-width: 991px) {
            width: 100%;
            height: 150px !important;
            overflow: hidden;

            img {
                width: 100%;
                height: auto !important;
            }
        }

        img {
            height: 100%;
            transition: all 500ms ease-in-out;
        }
    }

    .content {
        padding: 10px 30px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-bottom: 50px;
        position: relative;
        flex: 1 1 auto;
    }
}
</style>
