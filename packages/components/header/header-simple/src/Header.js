import styled from "vue-styled-components";
const HeaderProps = { primary: String, height: String, fixed: Boolean };

const getPrimaryColor = props => {
    return props.primary;
};

const getHeight = props => {
    return props.height;
};

const getPosition = props => {
    return props.fixed ? "fixed" : "relative";
};

const Header = styled("div", HeaderProps)`
  width: 100%;
  padding: 0px 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  z-index: 5;
  height: ${getHeight};
  position: ${getPosition};

  @media screen and (max-width: 991px) {
    flex-flow: column;
    padding: 0px;
    box-shadow: none;
    box-sizing: border-box;

    &:before {
      content: " ";
      width: 100%;
      height: 2px;
      background-color: ${getPrimaryColor};
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 11;
    }
  }
`;

export default Header;
