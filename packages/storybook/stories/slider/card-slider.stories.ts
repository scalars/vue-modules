// @ts-ignore
import CardSlider from "../../../components/slider/card-slider/src/CardSlider.vue";
import Card001 from "@vuemodules/card001";

export default {
    title: 'slider/CardSlider',
    component: CardSlider
};

export const Default = () => ({
    components: { CardSlider, Card001 },
    template: `<card-slider>
        <card001 v-for="(_, index) of [0,1,2,3,4,5]" :key="index" title="title" subtitle="subtitle" img="img" style="min-width: 300px;" />
    </card-slider>`
});
