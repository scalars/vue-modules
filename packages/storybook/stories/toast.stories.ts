import Toast from "../../components/toast/src/toast.vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Toasts/Simple Toast',
    component: Toast,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { Toast },
    props: {
        show: {
            default: boolean('Show', true)
        },
        content: {
            default: text('Content', 'Content toast')
        }
    },
    template: '<toast :show="show" >{{ content }}</toast>'
});
