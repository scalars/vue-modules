<template>
    <div class="vuemodules-searchbar" :style="themeConfig">
        <input
            type="text"
            :style="inputConfig"
            :name="name"
            :placeholder="placeholder"
            :required="required"
            :disabled="disabled"
            v-model="value"
            class="input-search"
            @keyup.enter="$emit('onSearch', value)"
        >
        <div class="icon" @click="$emit('onSearch', value)" :style="iconConfig">
            <slot name="icon"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "search-bar",
    props: {
        name: { type: String, required: false },
        placeholder: { type: String, required: false },
        required: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        theme: { type: String, default: 'default' },
        primary: { type: String, default: '#aaaaff' },
        background: { type: String, default: '#ffffff' },
        fontColor: { type: String, default: '#000' },
        borderRadius: { type: String, default: '0' },
        borderRadiusButton: { type: String, default: '0' },
        height: { type: String, default: '30px' },
        padding: { type: String, default: '3px 15px'},
        border: { type: String, default: '1px solid rgba(0, 0, 0, 0.3)'},
        init: { type: String, default: '' }
    },
    data() {
        return {
            value: '',
            themes: {
                default: {
                    joined: true
                },
                separated: {
                    joined: false
                }
            }
        }
    },
    computed: {
        isJoined () {
            return this.themes[this.theme] ? this.themes[this.theme].joined : false;
        },
        themeConfig () {
            return {
                backgroundColor: this.isJoined ? (!this.disabled ? this.background : '#fafafa') : 'transparent',
                fontColor: this.fontColor,
                height: this.height,
                border: this.isJoined ? this.border : 'none',
                borderRadius: this.isJoined ? this.borderRadius : '0'
            };
        },
        inputConfig () {
            return {
                lineHeight: this.height,
                padding: this.padding,
                border: !this.isJoined ? this.border : 'none',
                borderRadius: !this.isJoined ? this.borderRadius : '0',
                backgroundColor: !this.isJoined ? (!this.disabled ? this.background : '#fafafa') : 'transparent',
            };
        },
        iconConfig () {
            return {
                height: this.height,
                width: this.height,
                padding: '5px',
                backgroundColor: !this.disabled ? this.primary : '#aaa',
                borderRadius: this.borderRadiusButton,
                cursor: this.disabled ? 'not-allowed' : 'pointer',
                marginLeft: !this.isJoined ? '5px' : '0'
            };
        }
    },
    mounted () {
        this.value = this.init;
    }
};
</script>

<style lang="scss" scoped>
.vuemodules-searchbar {
    display: flex;
    align-items: center;
    overflow: hidden;

    .input-search {
        display: block;
        flex: 1 1 auto;
        min-height: 30px;
        height: 100%;
        max-height: 100%;
        border: none;
        background-color: transparent;

        &:focus {
            outline: none;
        }
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
