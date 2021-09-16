import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const DropDownContainer = styled.div`
  width: 160px;
`;

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  cursor: pointer;
  background-color: #171717;
  color: #fff;
  border-radius: 20px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? "0px" : "20px")};
  border-bottom-right-radius: ${(props) => (props.isOpen ? "0px" : "20px")};
  transition: all 0.3s ease-in-out;

  & span.dropdown-icon {
    display: flex;
    height: 100%;
    align-items: center;
    transform: rotate(${(props) => (props.isOpen ? "-180deg" : "0")});
    transition: all 0.2s ease-in-out;
  }
  & img {
    width: 16px;
    max-height: 20px;
    margin-right: ${(props) => (props.isMobile ? "0px" : "1ch")};
  }
`;

const DropDownList = styled.ul`
  position: absolute;
  padding: ${(props) => (props.isOpen ? "5px 10px" : "0")};
  margin-top: 0;
  border-radius: 10px;
  border-top-left-radius: ${(props) => (props.isOpen ? "0px" : "10px")};
  border-top-right-radius: ${(props) => (props.isOpen ? "0px" : "10px")};
  width: 160px;

  background-color: #171717;
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  cursor: pointer;
  margin: 5px auto;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 1.2rem;

  background-color: #444444;
  color: ${(props) => props.color || "#fff"};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #171717;
    transition: all 0.3s ease-in-out;
  }
  & img {
    width: 20px;
    margin-right: 1ch;
    height: 20px;
  }
`;

const Dropdown = (props) => {
  const [option, setOption] = useState(props.options[0]);
  const [isOpen, setOpen] = useState(false);
  const dropDownHandler = (e) => {
    setOpen((prevValue) => !prevValue);
  };
  const dropDownOptionHandler = (option) => {
    setOption(option);
    setOpen(false);
  };

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <DropDownContainer>
      <DropDownHeader isMobile={isMobile} isOpen={isOpen} onClick={dropDownHandler}>
        <img src={option.link} alt={option.name} />
        {!isMobile && <span>{option.name}</span>}

        {true && (
          <span className="dropdown-icon">
            <ArrowDropDown />
          </span>
        )}
      </DropDownHeader>

      <DropDownList isOpen={isOpen}>
        {props.options.map((option, index) => (
          <ListItem key={index} onClick={() => dropDownOptionHandler(option)}>
            <span className="icon">
              <img src={option.link} alt={option.name} />
            </span>
            {option.name}
          </ListItem>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
};

export default Dropdown;
