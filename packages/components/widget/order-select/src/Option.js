import styled from "vue-styled-components";
import { getProp } from "../../../../utils/utils";

const props = {
    height: String,
    background: String,
    color: String,
    borderColor: String,
    backgroundHover: String,
    colorHover: String
};

const Option = styled('div', props)`
    border-bottom: 1px solid ${getProp('borderColor')};
    padding: 0 15px;
    cursor: pointer;
    height: ${getProp('height')};
    max-height: ${getProp('height')};
    line-height: ${getProp('height')};
    background: ${getProp('background')};
    color: ${getProp('color')};
    overflow: hidden;
    transition: all 100ms ease-in-out;
    
    &:last-child {
        border-bottom: none;
    }
    
    &:hover {
        background: ${getProp('backgroundHover')};
        color: ${getProp('colorHover')};
    }
`;

export default Option;
