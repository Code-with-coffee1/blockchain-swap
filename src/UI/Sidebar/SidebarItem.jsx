import styled from "styled-components";
import {  NavLink } from "react-router-dom";
const SidebarItemContainer = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  display: flex;
  border-left: 5px solid transparent;
  margin: 0 auto;
  width: calc(100% - 15px);
  height: fit-content;
  padding-left: 10px;
  margin-left: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${"" /* border-color: #fff; */}
    transition: all 0.3s ease-in-out;
    background-color: #4a47a3;
  }
  &.active {
    border-color: #93b5c6;
  transition: all 0.3s ease-in-out;

  }
`;

const SidebarTitle = styled.div`
  display: flex;
  & span {
    display: flex;
    height: 100%;
    align-items: center;
  }
  & h3 {
    font-size: 1rem;
    margin-left: 10px;
  }
`;
const SidebarItem = (props) => {
  return (
    <SidebarItemContainer exact={props.exact || false} to={props.to || "/"}>
      <SidebarTitle> {props.children}</SidebarTitle>
    </SidebarItemContainer>
  );
};

export default SidebarItem;
