import styled from 'vue-styled-components';

const props = { width: String, height: String };

const getProp = (name) => {
    return (props) => {
        return props[name];
    }
};

const Gallery = styled('div', props)`
    width: ${getProp('width')};
    height: ${getProp('height')};
    overflow: hidden;
`;

export default Gallery;
