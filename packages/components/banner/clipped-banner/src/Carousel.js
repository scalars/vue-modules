import styled from 'vue-styled-components';
import { getProp } from "./utils";

const props = { height: String };

const Carousel = styled('div', props)`
    max-width: 100%;
    height: ${getProp('height')};
    overflow: hidden;
    position: relative;
    
    @media screen and (max-width: 991px) {
        height: auto;
    }
`;

export default Carousel;
