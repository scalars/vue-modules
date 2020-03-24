import styled from 'vue-styled-components';
import { getProp } from '../../../../utils/utils';

const props = { height: String, width: String, background: String, center: Object, sizeOpen: String, duration: Number };

const getCoord = (coord) => {
    return (props) => {
        return props.center[coord];
    };
};

const Container = styled('div', props)`
    width: ${getProp('width')};
    height: ${getProp('height')};
    background-color: ${getProp('background')};
    position: ${getProp('position')};
    top: 0;
    left: 0;
    clip-path: circle(0 at ${getCoord('x')} ${getCoord('y')});
    transition: clip-path ${getProp('duration')}ms ease-in-out;
    
    &.open {
        clip-path: circle(${getProp('sizeOpen')} at ${getCoord('x')} ${getCoord('y')});
    }
`;

export default Container;
