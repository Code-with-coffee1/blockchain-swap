import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
const SidebarItemContainer = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  margin-left: 0;
  transition: all 0.3s ease-in-out;
 
`;

const SidebarTitle = styled.div`

  display: flex;
  width: calc(100% - 15px);

  padding-left: 15px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #4a47a3;
  }

  & span {
    display: flex;
    height: 100%;
    align-items: center;
    transform: rotate(${(props) => (props.isOpen ? "0" : "-90deg")});
    transition: all 0.2s ease-in-out;

  }
  & h3 {
    font-size: 1rem;
    margin-left: 10px;
  }

`;

const DropdownMenu = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  background-color: #2A0944;
  transition: max-height 0.5s ease-in-out;
 
`;

const MultilevelItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const expandMenuHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <SidebarItemContainer exact={props.exact || false} to={props.to || "/"}>
      <SidebarTitle isOpen={isOpen}  onClick={expandMenuHandler}>
        <span className="dropdown-icon">
          <ArrowDropDownCircleIcon />
        </span>
        <h3>{props.title}</h3>
      </SidebarTitle>

      <DropdownMenu isOpen={isOpen}>{props.children}</DropdownMenu>
    </SidebarItemContainer>
  );
};

export default MultilevelItem;
