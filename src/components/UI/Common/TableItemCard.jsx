import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: #e0e0e0;

`;

const CardHeader = styled.div`
  font-size: 15px;
  font-weight: bold;
  align-self: flex-start;
  overflow: hidden;
  color: var(--pink-light);

`;

const CardBody = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: var(--pink-dark);
`;
const CardButton = styled.button`
  background-color: ${(props) => (props.isDisabled ? "var(--grey-light)" : "var(--blue-light)")};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.isDisabled ? "var(--grey-dark)" : "#fff")};
  border-radius: 20px;
  border-style: none;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  width: ${(props) => props.width || "auto"};
  box-shadow: ${(props) => (props.isDisabled ? "none" : "0px 2px 2px 1px rgba(102, 204, 255, 0.8)")};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => (props.isDisabled ? "var(--grey-light)" : "var(--blue-dark)")};
    transition: all 0.2s ease-in-out;
  }
`;

const TableItemCard = (props) => {
  return (
    <CardContainer>
      <CardHeader>{props.header}</CardHeader>
      <CardBody>
        <div>{props.children}</div>

        {props.btn && <CardButton isDisabled={props.isDisabled}>{props.btn}</CardButton>}
      </CardBody>
    </CardContainer>
  );
};

export default TableItemCard;
