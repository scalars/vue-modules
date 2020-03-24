import styled from "vue-styled-components";
import { getProp } from "../../../../utils/utils";

const props = {
    size: String,
    backgroundColor: String,
    backgroundHover: String,
    borderSize: String,
    borderColor: String,
    color: String,
    colorHover: String
};

const CustomButton = styled('button', props)`
    width: ${getProp('size')};
    height: ${getProp('size')};
    background-color: ${getProp('backgroundColor')};
    border: ${getProp('borderSize')} solid ${getProp('borderColor')};
    color: ${getProp('color')};
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: all 200ms ease-in-out;
    
    &:hover {
        color: ${getProp('colorHover')};
        
        &:before {
            left: 0;
        }
    }
    
    &:before {
        position: absolute;
        content: ' ';
        width: 100%;
        height: 100%;
        top: 0;
        left: -100%;
        background-color: ${getProp('backgroundHover')};
        z-index: 0;
        transition: all 200ms ease-in-out;
    }
    
    &:focus {
        outline: none;
    }
`;

export default CustomButton;
