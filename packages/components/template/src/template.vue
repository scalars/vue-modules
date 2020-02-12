<template>
    <div class="template">{{ template }}</div>
</template>

<script>
export default {
    name: 'custom-template',
    props: {
        template: {
            default: 'template'
        }
    }
}
</script>

<style scoped lang="scss">
.template {
    background-color: #333;
}
</style>
