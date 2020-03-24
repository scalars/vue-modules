// @ts-ignore
import Typewriter from "../../../components/widget/typewritter/src/Typewriter.vue";

export default {
    title: 'widget/Typewriter',
    component: Typewriter
};

export const Default = () => ({
    components: { Typewriter },
    template: `<typewriter :words="['Test writer', 'Writing words']"/>`
});
