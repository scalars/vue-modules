// @ts-ignore
import ItemCarousel from "../../../components/gallery/item-carousel/src/ItemCarousel.vue";

export default {
    title: 'gallery/ItemCarousel',
    component: ItemCarousel
};

export const Default = () => ({
    components: { ItemCarousel },
    template: `<item-carousel>
        <div v-for="(item, index) of [0,1,2,3,4,5,6]" :key="index" style="margin-right: 10px; cursor: pointer;width: 100px; min-width: 100px; height: 100px; background-color: teal;"></div>
    </item-carousel>`
});
