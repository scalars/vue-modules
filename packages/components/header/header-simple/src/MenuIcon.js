import styled from "vue-styled-components";

const MenuIconProps = { primary: String };

const getPrimaryColor = props => {
    return props.primary;
};

const MenuIcon = styled("span", MenuIconProps)`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3), 0 0 0 7px ${getPrimaryColor};
  cursor: pointer;
  margin-right: 10px;
  color: ${getPrimaryColor};
`;

export default MenuIcon;
