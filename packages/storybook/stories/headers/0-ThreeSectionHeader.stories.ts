import ThreeSectionHeader from '../../../components/three-section-header/src/three-section-header.vue';

export default {
    title: 'Headers/Three section header',
    component: ThreeSectionHeader
};

export const View = () => ({
    components: { ThreeSectionHeader },
    template: '<three-section-header />'
});
