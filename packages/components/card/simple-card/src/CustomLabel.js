import styled from 'vue-styled-components';
import { getProp } from "./utils";

const props = { background: String };

const CustomLabel = styled('div', props)`
    background-color: ${getProp('background')};
`;

export default CustomLabel;
