// @ts-ignore
import SimpleBanner from "../../../components/banner/simple-banner/src/SimpleBanner.vue";
import {text, withKnobs} from "@storybook/addon-knobs";

export default {
    title: 'banner/SimpleBanner',
    component: SimpleBanner,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { SimpleBanner },
    props: {
        width: { default: text('Width', '100%') },
        height: { default: text('Height', '500px') },
        heightMobile: { default: text('Height mobile', '300px') }
    },
    data() {
        return {
            items: [
                {
                    image: 'https://cdn.pixabay.com/photo/2020/04/17/14/16/landscape-5055384_960_720.jpg',
                    title: 'Title 1',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, autem deleniti distinctio dolor earum, eos expedita facilis ipsa maiores nam nemo nulla porro qui repellat sed temporibus ullam voluptate?',
                    link: { url: '#', text: 'Link' }
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2020/04/28/13/17/tulips-5104494_960_720.jpg'
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2020/04/28/12/11/city-5104205_960_720.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, autem deleniti distinctio dolor earum, eos expedita facilis ipsa maiores nam nemo nulla porro qui repellat sed temporibus ullam voluptate?'
                }
            ]
        }
    },
    template: `<simple-banner :items="items" :width="width" :height="height" :height-mobile="heightMobile">
        <svg width="10px" slot="left-icon" style="transform: rotateZ(180deg)" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="#fff" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
        <svg width="10px" slot="right-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="#fff" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
    </simple-banner>`
});
