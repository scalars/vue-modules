import styled from 'vue-styled-components';
import { getProp } from "./utils";

const props = { margin: String };

const ItemContent = styled('div', props)`
    height: 100%;
    width: calc(100% - ${getProp('margin')} * 2);
    margin-left: ${getProp('margin')};
    
    @media screen and (max-width: 991px) {
        height: auto;
    }
`;

export default ItemContent;
