// @ts-ignore
import CircularButton from "../../../components/button/circular-button/src/CircularButton.vue";
import { color, text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'button/CircularButton',
    component: CircularButton,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { CircularButton },
    props: {
        size: { default: text('Size', '50px') },
        backgroundColor: { default: color('Background color', '#fff') },
        backgroundHover: { default: color('Background color on hover', '#ddd') },
        borderSize: { default: text('Border size', '1px') },
        borderColor: { default: color('Border color', '#000') },
        color: { default: color('Text color', '#000') },
        colorHover: { default: color('Text color on hover', '#fff') }
    },
    template: `<circular-button
        :size="size"
        :backgroundColor="backgroundColor"
        :backgroundHover="backgroundHover"
        :borderSize="borderSize"
        :borderColor="borderColor"
        :color="color"
        :colorHover="colorHover"
    >-</circular-button>`
});
