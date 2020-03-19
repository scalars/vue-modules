<template>
    <div class="vuemodules-order-select">
        <div class="input">
            <label :style="{ color: colorLabel }">{{ label }}</label>
            <div class="select" tabindex="0" @click="setStatus(!open)" @blur="setStatus(false)">
                <div class="current" :style="{
                    height: selectHeight,
                    maxHeight: selectHeight,
                    lineHeight: selectHeight,
                    minWidth: minWidth,
                    borderRadius: open ? `${borderRadius}px ${borderRadius}px 0 0` : `${borderRadius}px`,
                    background,
                    color: fontColor,
                    border: `1px solid ${borderColor}`
                }">
                    {{ getLabel(selected) || placeholder }} <label class="arrow" :style="{borderTopColor: fontColor}" />
                </div>
                <div class="options" :style="{
                    maxHeight: open ? '500px' : '0',
                    opacity: open ? '1' : '0',
                    borderRadius: open ? `0 0 ${borderRadius}px ${borderRadius}px` : `${borderRadius}px`,
                    borderLeft: `1px solid ${borderColor}`,
                    borderRight: `1px solid ${borderColor}`,
                    borderBottom: `1px solid ${borderColor}`
                }">
                    <Option
                        v-for="(option, index) of options"
                        :key="index"
                        :height="optionsHeight"
                        :background="background"
                        :color="fontColor"
                        :border-color="borderColor"
                        :background-hover="backgroundHover"
                        :color-hover="colorHover"
                        @click="setSelected(option.value)"
                    >
                        {{ option.label }}
                    </Option>
                </div>
            </div>
        </div>
        <div class="extra">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Option from "./Option";
export default {
    name: "order-select",
    components: {
        Option
    },
    props: {
        label: { default: 'Order by' },
        options: { default: () => [
            {
                label: 'Choose',
                value: null
            }
        ]},
        default: { default: null },
        selectHeight: { default: '36px' },
        minWidth: { default: '250px' },
        optionsHeight: { default: '36px' },
        placeholder: { default: 'Choose' },
        borderRadius: { type: Number, default: 5 },
        background: { type: String, default: '#fff' },
        backgroundHover: { type: String, default: '#dfdfdf' },
        colorHover: { type: String, default: '#000' },
        fontColor: { type: String, default: '#000' },
        borderColor: { type: String, default: 'rgba(0, 0, 0, 0.2)' },
        colorLabel: { type: String, default: '#000'}
    },
    watch: {
        default() {
            this.selected = this.default;
        },
        selected () {
            this.$emit('onOrder', this.selected);
        }
    },
    data() {
        return {
            selected: null,
            open: false
        }
    },
    mounted() {
        this.selected = this.default;
    },
    methods: {
        getLabel(value) {
            const option = this.options.find(option => option.value === value);
            return option ? option.label : '';
        },
        setSelected(value) {
            this.selected = value;
        },
        setStatus(status) {
            this.open = status;
        }
    }
};
</script>

<style lang="scss" scoped>
.vuemodules-order-select {
    display: flex;
    align-items: center;

    label {
        margin: 0;
    }

    .input {
        display: flex;
        align-items: center;

        .select {
            display: inline-block;
            margin-left: 10px;
            position: relative;

            &:focus{
                outline: none;
            }

            .current {
                display: flex;
                padding: 0 10px 0 15px;
                justify-content: space-between;
                align-items: center;
                transition: all 100ms ease-in-out;

                .arrow {
                    width: 0;
                    height: 0;
                    margin: 0 0 0 10px;
                    border: 5px solid transparent;
                    transform: translateY(40%);
                }
            }

            .options {
                position: absolute;
                width: 100%;
                top: 100%;
                left: 0;
                overflow: hidden;
                transition: all 200ms ease-in-out;
                overflow-y: scroll;
            }
        }
    }

    .extra {
        display: flex;
        flex: 1 1 auto;
        justify-content: flex-end;
    }
}
</style>
