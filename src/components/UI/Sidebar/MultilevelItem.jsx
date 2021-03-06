import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarItemContainer = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #9276c2;
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
    background-color: #eee;
  }

  & span.dropdown-icon {
    display: flex;
    height: 100%;
    align-items: center;
    transform: rotate(${(props) => (props.isOpen ? "0" : "-90deg")});
    transition: all 0.2s ease-in-out;
    margin-left: auto;
    margin-right: 1rem;
  }
  & span.icon {
    display: flex;
    flex-direction: column;
    min-width: 30px;
    justify-content: center;
    align-items: center;
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
  background-color: #F3F1F5;
  transition: max-height 0.5s ease-in-out;
`;

const MultilevelItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const expandMenuHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <SidebarItemContainer exact={props.exact || false} to={props.to || "/"}>
      <SidebarTitle isOpen={isOpen} onClick={expandMenuHandler}>
        <span className="icon">
          <FontAwesomeIcon icon={props.icon} />
        </span>
        <h3>{props.title}</h3>
        <span className="dropdown-icon">
          <ArrowDropDown />
        </span>
      </SidebarTitle>

      <DropdownMenu isOpen={isOpen}>{props.children}</DropdownMenu>
    </SidebarItemContainer>
  );
};

export default MultilevelItem;
