// @ts-ignore
import Card004 from "../../../components/card/card004/src/Card004.vue";
import { withKnobs, text, color } from "@storybook/addon-knobs";

export default {
    title: 'card/Card004',
    component: Card004,
    decorators: [withKnobs]
};

export const Default = () => ({
    data() {
        return {
            item: {
                title: 'Title',
                price: 3000,
                description: 'Envio gratis',
                restaurant:'Parilla El buen Sabor'
            }
        }
    },
    components: { Card004 },
    props: {
        img: {
            default: text('Image', 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/08/hamburguesas-caseras-receta-facil.jpg')
        }
    },
    template: `<card004 :item="item" :img="img" style="box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)"> 
                <img slot="left" src="../../../components/card/card004/assets/proximo.svg" />
                <img slot="right" src="../../../components/card/card004/assets/vector.svg" />
               </card004>`
});
