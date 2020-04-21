// @ts-ignore
import CategoryButton from "../../../components/button/category-button/src/CategoryButton.vue";
import {color, text, withKnobs} from "@storybook/addon-knobs";

export default {
    title: 'button/CategoryButton',
    component: CategoryButton,
    decorators: [withKnobs]
};

export const Default = () => ({
    data: () => ({
        icon: 'A'
    }),
    props: {
        color: {
            default: color('Font color', '#fff')
        },
        background: {
            default: color('Background', 'rgba(30, 91, 212, 1)')
        },
        title: {
            default: text('Title', 'Category')
        },
        icon: {
            default: text('Icon', 'A')
        },
        borderRadius: {
            default: text('Border radius', '5px')
        },
        padding: {
            default: text('Padding', '10px 15px')
        }
    },
    components: { CategoryButton },
    template: '<category-button :color="color" :padding="padding" :background="background" :icon="icon" :title="title" :border-radius="borderRadius" :style="{maxWidth: \'100px\'}"/>'
});
