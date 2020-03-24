// @ts-ignore
import AnimatedContainer from "../../../components/widget/animated-container/src/AnimatedContainer.vue";
import { withKnobs, boolean, color, text } from '@storybook/addon-knobs';

export default {
    title: 'widget/AnimatedContainer',
    component: AnimatedContainer,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { AnimatedContainer },
    props: {
        open: {
            default: boolean('Open', false)
        },
        background: {
            default: color('Background', '#eee')
        },
        x: {
            default: text('X Coord', '0px')
        },
        y: {
            default: text('Y Coord', '0px')
        }
    },
    template: `<animated-container
        :open="open"
        :background="background"
        :center="{x, y}"
    >Content</animated-container>`
});
