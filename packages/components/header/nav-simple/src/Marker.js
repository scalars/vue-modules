import styled from "vue-styled-components";
const MarkerProps = {
    widthItem: Number,
    markerPosition: String,
    primary: String
};

const getPrimaryColor = props => {
    return props.primary;
};

const getWidth = props => {
    return props.widthItem + "px";
};

const getPosition = props => {
    return props.markerPosition;
};

const MarkerItem = styled("div", MarkerProps)`
  width: ${getWidth};
  left: ${getPosition};
  position: absolute;
  height: 3px;
  background-color: ${getPrimaryColor};
  background: linear-gradient(
    to right,
    transparent 0%,
    ${getPrimaryColor} 50%,
    transparent 100%
  );
  border-radius: 50%;
  bottom: 0;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export default MarkerItem;
