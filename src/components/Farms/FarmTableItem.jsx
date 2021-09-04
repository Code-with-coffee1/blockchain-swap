import React, { useState } from "react";
import styled from "styled-components";
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  & h3 {
    color: #fcba03;
  }
  & .details-btn {
    background: #fcba03;
    box-shadow: none;
    border: none;
    outline: none;
  }
`;
const Details = styled.div`
  height: 300px;
  width: 100%;
`;

const FarmTableItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const detailsHandler = () => {
    setShowDetails((prevValue) => !prevValue);
  };

  return (
    <ItemContainer>
      <h3>{props.farm.name}</h3>
      <p className="earned-count">
        <label>Earned</label>
        <span>{props.farm.earned}</span>
      </p>
      <p className="apr">
        <label>APR</label>
        <span>{props.farm.details[0]}%</span>
      </p>
      <button onClick={detailsHandler} className="details-btn">
        Details
      </button>
      {showDetails && <Details>{props.farm.details[0]}</Details>}
    </ItemContainer>
  );
};

export default FarmTableItem;
