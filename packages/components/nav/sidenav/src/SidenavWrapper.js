import styled from 'vue-styled-components';
import { getProp } from "../../../../utils/utils";

const props = { side: String,  width: String, show: Boolean, overlap: Boolean, background: String };

const marginLeft = (props) => {
    return props['show'] || props['overlap'] ? '0' : `-${props['width']}`;
};

const position = (props) => {
    return props['overlap'] ? 'absolute' : 'relative';
};

const left = (props) => {
    return props['overlap'] && props['show'] || !props['overlap'] ? '0' : '-100%';
};

const shadow = (props) => {
    return props['overlap'] ? '2px 0px 8px rgba(0, 0, 0, 0.4)' : 'none';
};

const SidenavWrapper = styled('div', props)`
    width: ${getProp('width')};
    height: 100%;
    min-height: 100vh;
    position: ${position};
    margin-left: ${marginLeft};
    left: ${left};
    z-index: 3;
    box-shadow: ${shadow};
    background: ${getProp('background')};
    transition: all 200ms ease-in-out;
`;

export default SidenavWrapper;
