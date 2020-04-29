// @ts-ignore
import Card002 from "../../../components/card/card002/src/Card002.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'card/Card002',
    component: Card002,
    decorators: [withKnobs]
};

export const Default = () => ({
    props: {
        title: {
            default: text('Title', 'Title'),
        },
        img: {
            default: text('Image', 'https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg')
        }
    },
    data() {
        return {
            options: [
                { label: 'Label', price: '$3000' },
                { label: 'Label', price: '$4000' },
                { label: 'Label', price: '$5000' }
            ]
        }
    },
    components: { Card002 },
    template: '<card002 :title="title" :options="options" :img="img" title-color="red" style="box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)" padding="5px 15px" />'
});
