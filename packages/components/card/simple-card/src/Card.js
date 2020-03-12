import styled from 'vue-styled-components';
import { getProp } from "./utils";

const CardProps = {
    height: String,
    width: String,
    background: String
};

const Card = styled('div', CardProps)`
    width: ${getProp('width')};
    height: ${getProp('height')};
    background-color: ${getProp('background')};
`;

export default Card;
