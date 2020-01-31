import {ExperienceSelector} from "@vuemodules/experience-selector";

export default {
    title: 'Sections/Experience Selector',
    component: ExperienceSelector
};

export const Default = () => ({
    components: { ExperienceSelector },
    template: '<experience-selector />'
});
