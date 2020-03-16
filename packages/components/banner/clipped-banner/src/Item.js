import styled from 'vue-styled-components';
import { getProp } from "./utils";

const props = { width: String, activeWidth: String, active: Boolean, background: String, clipSize: String };

const getWidth = (props) => {
    return props.active ? props.activeWidth : props.width;
};

const getCursor = (props) => {
    return props.active ? 'default' : 'pointer';
};

const Item = styled('div', props)`
    height: 100%;
    max-width: calc(${getWidth} + ${getProp('clipSize')});
    min-width: calc(${getWidth} + ${getProp('clipSize')});
    margin-left: -${getProp('clipSize')};
    background-image: url(${getProp('background')});
    transition: all 200ms ease-in-out;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 50%;
    clip-path: polygon(${getProp('clipSize')} 0, 100% 0, calc(100% - ${getProp('clipSize')}) 100%, 0 100%);
    position: relative;
    cursor: ${getCursor};
    
    @media screen and (max-width: 991px) {
        height: auto;
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        margin-left: 0;
        clip-path: none!important;
    }
`;

export default Item;
