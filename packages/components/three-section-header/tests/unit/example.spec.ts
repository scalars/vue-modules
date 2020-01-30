import { shallowMount } from "@vue/test-utils";
import ThreeSectionHeader from "@/three-section-header.vue";

describe("ThreeSectionHeader.vue", () => {
  it("Renders component", () => {
    const msg = "Header";
    const wrapper = shallowMount(ThreeSectionHeader);
    expect(wrapper.text()).toMatch(msg);
  });
});
