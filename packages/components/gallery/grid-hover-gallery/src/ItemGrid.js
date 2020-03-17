import styled from "vue-styled-components";
import { getProp } from "../../../../utils/utils";

const props = { itemsPerRow: Number, itemsPerRowMobile: Number };

const ItemGrid = styled('div', props)`
    width: calc(100% / ${getProp('itemsPerRow')});
    
    @media screen and (max-width: 991px) {
        width: calc(100% / ${getProp('itemsPerRowMobile')});        
    }
`;

export default ItemGrid;
