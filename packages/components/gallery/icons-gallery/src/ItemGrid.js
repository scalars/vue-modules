import styled from "vue-styled-components";
import { getProp } from "../../../../utils/utils";

const props = { itemsPerRow: Number, itemsPerRowMobile: Number, height: String, heightMobile: String };

const ItemGrid = styled('div', props)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / ${getProp('itemsPerRow')});
    height: ${getProp('height')};
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    overflow: hidden;
    
    @media screen and (max-width: 991px) {
        width: calc(100% / ${getProp('itemsPerRowMobile')});
        height: ${getProp('heightMobile')};
        padding: 3px;
        margin-bottom: 6px;        
    }
`;

export default ItemGrid;
