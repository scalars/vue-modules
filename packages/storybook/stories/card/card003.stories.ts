// @ts-ignore
import Card003 from "../../../components/card/card003/src/Card003.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'card/Card003',
    component: Card003,
    decorators: [withKnobs]
};

export const Default = () => ({
    props: {
        img: {
            default: text('Image', 'https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg')
        }
    },
    data() {
        return {
            item: {
                title: 'Title',
                price: 3000,
                presentation: 'bulto',
                quantity: 0
            }
        }
    },
    components: { Card003 },
    template: '<card003 :item="item" :img="img" title-color="red" style="box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)" padding="5px 15px" />'
});
