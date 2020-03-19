// @ts-ignore
import Sidenav from "../../../components/nav/sidenav/src/Sidenav.vue";
import { boolean, color, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'nav/SidenavWrapper',
    component: Sidenav,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { Sidenav },
    props: {
        show: {
            default: boolean('Show', false)
        },
        overlap: {
            default: boolean('Overlap', false)
        },
        background: {
            default: color('Background', '#eeeeee')
        }
    },
    methods: {
        toggleSidenav: function () {
            // @ts-ignore
            this.show = !this.show;
        }
    },
    template: `<sidenav :show="show" :overlap="overlap" :background="background">
        <div slot="sidenav">
            <button v-if="overlap" @click="toggleSidenav">Toggle sidenav</button>
            Sidenav
        </div>
        <div>
            <button @click="toggleSidenav">Toggle sidenav</button>
        </div>
    </sidenav>`
});
