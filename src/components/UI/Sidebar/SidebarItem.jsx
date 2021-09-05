import styled from "styled-components";
import { NavLink } from "react-router-dom";
const SidebarItemContainer = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.color || "#512D6D"};
  display: flex;
  border-left: 5px solid transparent;
  margin: 0 auto;
  width: calc(100% - 15px);
  height: fit-content;
  padding-left: 10px;
  margin-left: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #EEEEEE;
  }
  &.active {
    border-color: #512D6D;
    transition: all 0.3s ease-in-out;
  }
`;

const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  & h3 {
    font-size: 1rem;
    margin-left: 10px;
  }
  & h6 {
    padding: 0 1ch;
    margin-top: 0;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
const SidebarItem = (props) => {
  return (
    <SidebarItemContainer color={props.color} exact={props.exact || false} to={props.to || "/"}>
      <SidebarTitle> {props.children}</SidebarTitle>
    </SidebarItemContainer>
  );
};

export default SidebarItem;
