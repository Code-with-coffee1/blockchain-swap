import React from "react";
import styled from "styled-components";
import FarmData from "./FarmDataDummy";
import Filters from "./Filters";
import FarmTableItem from "./FarmTableItem";

const TableContainer = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin: auto;
  background-color: #F7F6F2;
  border-radius: 10px;
  padding: 20px;
`;

const FarmTable = () => {
  return (
    <TableContainer>
      <Filters />
      {FarmData.map((farm, index) => (
        <FarmTableItem key={farm.index} farm={farm} />
      ))}
    </TableContainer>
  );
};

export default FarmTable;
