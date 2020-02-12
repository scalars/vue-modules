import Vue from 'vue';

//@ts-ignore
import VueLayers from "vuelayers";
import {VueLayersMap} from "@vuemodules/vuelayersmap";
import "vuelayers/lib/style.css"; // needs css-loader

Vue.use(VueLayers);

export default {
    title: 'Widgets/Vue Layers Map',
    component: VueLayersMap
};

export const Default = () => ({
    components: { VueLayersMap },
    template: '<vue-layers-map />'
});
