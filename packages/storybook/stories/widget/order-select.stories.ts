// @ts-ignore
import OrderSelect from "../../../components/widget/order-select/src/OrderSelect.vue";
import { boolean, color, number, text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'widget/OrderSelect',
    component: OrderSelect,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { OrderSelect },
    props: {
        label: { default: text('Label', 'Order by', 'General') },
        selectHeight: { default: text('height', '36px', 'Select') },
        minWidth: { default: text('Min width', '250px', 'General') },
        optionsHeight: { default: text('height', '36px', 'Options') },
        placeholder: { default: text('Placeholder', 'Choose', 'Select') },
        borderRadius: { type: Number, default: number('Border radius', 5, {},'General') },
        background: { type: String, default: color('Background','#fff', 'General') },
        backgroundHover: { type: String, default: color('Background hover', '#dfdfdf', 'Options') },
        colorHover: { type: String, default: color('Font color hover', '#000', 'Options') },
        fontColor: { type: String, default: color('Font color', '#000', 'General') },
        borderColor: { type: String, default: color('Border color', 'rgba(0, 0, 0, 0.2)', 'General') },
        colorLabel: { type: String, default: color('Color label', '#000', 'General') },
        defaultOption: { type: String, default: boolean('With default value', false, 'General') }
    },
    computed: {
        // @ts-ignore
        defaultValue (): any {
            // @ts-ignore
            return this.defaultOption ? 'A-Z' : null;
        }
    },
    data() {
        return {
            options: [
                { label: 'Name A-Z', value: 'A-Z'},
                { label: 'Name Z-A', value: 'Z-A'},
                { label: 'Price Ascendant', value: 'PA'},
                { label: 'Price Descendent', value: 'PD'},
            ]
        }
    },
    template: `<div style="margin: 15px;">
        <order-select
            :options="options"
            :default="defaultValue"
            :label="label"
            :selectHeight="selectHeight"
            :minWidth="minWidth"
            :optionsHeight="optionsHeight"
            :placeholder="placeholder"
            :borderRadius="borderRadius"
            :background="background"
            :backgroundHover="backgroundHover"
            :colorHover="colorHover"
            :fontColor="fontColor"
            :borderColor="borderColor"
            :colorLabel="colorLabel"
        >7 Articles</order-select>
    </div>`
});
