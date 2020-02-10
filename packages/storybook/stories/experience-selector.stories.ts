import ExperienceSelector from '../../components/experience-selector/src/experience-selector.vue';

export default {
  title: "Sections/Experience Selector",
  component: ExperienceSelector
};

export const Default = () => ({
  components: { ExperienceSelector },
  template: "<experience-selector />"
});
