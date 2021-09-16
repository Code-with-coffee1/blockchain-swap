import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  height: 64px;
`;

const ToggleBig = styled.div``;
const ToggleSmall = styled.div``;

const DropdownHeader = styled.div`
  background-color: var(--grey-light);
  width: 135px;
  cursor: pointer;
  border: 1px solid var(--pink-dark);
  border-radius: 20px;
  transition: all 0.3s;
  & p.selected {
    padding-left: 20px;
    color: var(--pink-dark);
  }
`;
const DropdownList = styled.div`
  position: relative;
  cursor: pointer;
  width: 135px;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};

  overflow: hidden;

  transition: all 0.3s;
  & div.option {
    padding: 5px 20px;
    color: var(--pink-dark);
    transition: color 0.3s;
  }
  & div.option:hover {
    background-color: var(--pink-light);
    transition: background-color, color 0.3s;
    color: var(--grey-light);
  }
  & div.last-option:hover {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: var(--grey-light);
    transition: color 0.3s;
  }
`;

const Filters = () => {
  const [dropdown, setDropdown] = useState("Hot");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Hot", "APR", "Earned", "Total Staked"];
  const dropdownHandler = (e) => {
    setIsOpen((prevValue) => !prevValue);
    // setIsOpen(false)
  };

  const selectDropdown = (e) => {
    console.log(e.target.innerText);
    setDropdown(e.target.innerText);
  };
  return (
    <FilterContainer>
      <ToggleSmall>ToggleSmall</ToggleSmall>
      <ToggleBig>ToggleBig</ToggleBig>
      <DropdownHeader isOpen={isOpen} onClick={dropdownHandler}>
        <p className="selected">{dropdown}</p>
        <DropdownList onClick={DropdownHeader} isOpen={isOpen}>
          {options
            .filter((option) => option !== dropdown)
            .map((option, index) => {
              let isLast = index !== options.length - 2;
              return <div className={isLast ? "option" : "option last-option"}>{option}</div>;
            })}
        </DropdownList>
      </DropdownHeader>
    </FilterContainer>
  );
};

export default Filters;
