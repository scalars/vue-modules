import {CardItem} from "@vuemodules/card-item";

export default {
    title: 'Card/Card Item',
    component: CardItem
};

export const Default = () => ({
    components: { CardItem },
    template: '<card-item title="test" description="lorem asdfasdfasdfjasdhfakjsdjfañuerjaksldkfjkasdfasdf" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fvbm3EXpUUcM%2Fmaxresdefault.jpg&f=1&nofb=1" redirect="#"/>'
});
