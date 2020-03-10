// import { ItemCard } from "@vuemodules/item-card";
// @ts-ignore
import ItemCard from "../../../components/card/item-card/src/ItemCard.vue"

export default {
    title: 'Card/Item Card',
    component: ItemCard
};

export const Default = () => ({
    components: { ItemCard },
    template: '<item-card title="test" description="lorem asdfasdfasdfjasdhfakjsdjfañuerjaksldkfjkasdfasdf" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fvbm3EXpUUcM%2Fmaxresdefault.jpg&f=1&nofb=1" redirect="#"/>'
});
