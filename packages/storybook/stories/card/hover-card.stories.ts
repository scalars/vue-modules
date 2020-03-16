// @ts-ignore
import HoverCard from "../../../components/card/hover-card/src/HoverCard.vue";

export default {
    title: 'card/HoverCard',
    component: HoverCard
};

export const Default = () => ({
    components: { HoverCard },
    template: `<hover-card>
        <img src="https://cdn.pixabay.com/photo/2019/04/27/22/09/space-4161418_960_720.jpg" slot="background" style="height: 100%;">
        <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; font-weight: 900; color: #fff; font-size: 2em;">
            Hover Content
        </div>
    </hover-card>`
});
