// @ts-ignore
import Card001 from "../../../components/card/card001/src/Card001.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'card/Card001',
    component: Card001,
    decorators: [withKnobs]
};

export const Default = () => ({
    props: {
        title: {
            default: text('Title', 'Title'),
        },
        subtitle: {
            default: text('Subtitle', 'Subtitle')
        },
        img: {
            default: text('Image', 'https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg')
        }
    },
    components: { Card001 },
    template: '<card001 :title="title" :subtitle="subtitle" :img="img" style="box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)" />'
});
