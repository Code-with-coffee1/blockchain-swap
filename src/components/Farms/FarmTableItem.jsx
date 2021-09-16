import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableItemCard from "../UI/Common/TableItemCard";

const ItemContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  height: auto;
  transition: all 0.3s ease-in-out;

  & h3 {
    color: var(--pink-dark);
  }
  & div:nth-child(1) {
    grid-column: 1/4;
  }
  & div:nth-child(2) {
    grid-column: 4/6;
  }
  & div:nth-child(3) {
    grid-column: 6/8;
  }

  & div:nth-child(4) {
    grid-column: 8/10;
  }
  & div:nth-child(5) {
    grid-column: 10/12;
  }
  & div:nth-child(6) {
    grid-column: 12/14;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & label {
    color: var(--pink-light);
    font-size: 12px;
    margin-bottom: 5px;
  }
  & span {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => (props.greyed ? "var(--grey-dark)" : "var(--pink-dark)")};
  }
`;

const Details = styled.div`
  grid-column: 1/14;
  transition: max-height 0.5s ease-in-out;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  max-height: ${(props) => (props.showDetails ? "1200px" : "0")};
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  & div:nth-child(1) {
    grid-column: 1/5;
  }
  & div:nth-child(2) {
    grid-column: 5/9;
  }
  & div:nth-child(3) {
    grid-column: 9/13;
  }
`;
const DetailLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  & a {
    text-decoration: none;
    font-weight: bold;
    color: var(--blue-light);
  }
  & a:hover {
    color: var(--blue-dark);
  }
`;
const DetailsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--blue-light);
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  & button span {
    transform: ${(props) => (props.showDetails ? "rotate(180deg)" : "rotate(0deg)")};
    transition: all 0.3s ease-in-out;
  }
`;

const FarmTableItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const detailsHandler = () => {
    setShowDetails((prevValue) => !prevValue);
  };

  return (
    <ItemContainer className="row">
      <div>
        <h3 className="col-3">{props.farm.name}</h3>
      </div>
      <Stats greyed={!props.farm.earned}>
        <label>Earned</label>
        <span>{props.farm.earned}</span>
      </Stats>

      <Stats>
        <label>APR</label>
        <span>{props.farm.details[0]}%</span>
      </Stats>
      <Stats>
        <label>Liquidity</label>
        <span>{props.farm.details[0]}%</span>
      </Stats>

      <Stats>
        <label>Multiplier</label>
        <span>{props.farm.details[0]}%</span>
      </Stats>

      <DetailsBtn showDetails={showDetails}>
        <button onClick={detailsHandler}>
          Details{" "}
          <span>
            <ArrowDropDown />
          </span>
        </button>
      </DetailsBtn>

      <Details showDetails={showDetails}>
        <DetailLinkContainer>
          <a href={props.farm.details[1]}>
            Lorem Ipsum 1 <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a href={props.farm.details[1]}>
            Lorem Ipsum 2 <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a href={props.farm.details[1]}>
            Lorem Ipsum 3 <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </DetailLinkContainer>

        <div>
          <TableItemCard header="Cake Earned" isDisabled={!props.farm.earned} btn="Harvest">
            <strong>{props.farm.earned}</strong>
          </TableItemCard>
        </div>
        <div>
          <TableItemCard header="Start Farming" btn="Connect Wallet"></TableItemCard>
        </div>
      </Details>
    </ItemContainer>
  );
};

export default FarmTableItem;
