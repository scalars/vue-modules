import ThreeSectionHeader from "@vuemodules/three-section-header";

export default {
    title: 'Headers/Three section header',
    component: ThreeSectionHeader
};

export const View = () => ({
    components: { ThreeSectionHeader },
    template: '<three-section-header />'
});
