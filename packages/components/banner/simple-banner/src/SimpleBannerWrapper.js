import styled from 'vue-styled-components';
import { getProp } from "../../../../utils/utils";

const props = { width: String, height: String, heightMobile: String }

export default styled('div', props)`
    width: ${getProp('width')};
    height: ${getProp('height')};
    display: flex;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 991px) {
        height: ${getProp('heightMobile')};
    }
`;
