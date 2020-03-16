import styled from 'vue-styled-components';
import { getProp } from "./utils";

const props = { height: String, width: String };

const Card = styled('div', props)`
    width: ${getProp('width')};
    height: ${getProp('height')};
    position: relative;
    overflow: hidden;
`;

export default Card;
