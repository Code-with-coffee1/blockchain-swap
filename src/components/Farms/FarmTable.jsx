import React from "react";
import styled from "styled-components";
import Filters from "../Filters";
import FarmData from "./FarmDataDummy";
import FarmTableItem from "./FarmTableItem";

const TableContainer = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin: auto;
  border-radius: 10px;
  padding: 20px;
`;
const ItemWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 0px 10px #e6e6e6;
`;

const FarmTable = () => {
  return (
    <TableContainer>
    <Filters />
      <ItemWrapper>
        {FarmData.map((farm, index) => (
          <FarmTableItem key={index} farm={farm} />
        ))}
      </ItemWrapper>
    </TableContainer>
  );
};

export default FarmTable;
