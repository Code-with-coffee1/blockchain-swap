import React from "react";
import styled from "styled-components";
const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  widht: 100%;
`;
const SortBy = styled.select`
  border-radius: 5px;
  padding: 10px;
`;

const SearchBox = styled.input`
  padding: 10px;
  border-radius: 5px;
  &:focus {
      outline: none;
      
  }
`;

const Filter = styled.div`
  & lable {
    font-size: 0.5em;
  }
`;

const Filters = () => {
  return (
    <FiltersContainer>
      <lable>Sort By</lable>
      <Filter>
        <SortBy>
          <option value="apr">apr</option>
          <option value="multiplier">multiplier</option>
          <option value="earned">earned</option>
          <option value="liquidity">liquidity</option>
        </SortBy>
      </Filter>
      <Filter>
        <lable>Search</lable>
        <SearchBox type = "text" />
      </Filter>
    </FiltersContainer>
  );
};

export default Filters;
