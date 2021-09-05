import React from "react";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { PinDropSharp } from "@material-ui/icons";

export const PrimaryBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #00c1d4;
  color: #fff;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  margin: 0 10px;
  height: 40px;

  & .icon {
    margin-right: ${(props) => (props.isMobile ? "0" : "1ch")};
  }
  &:hover {
    filter: brightness(0.8);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    margin: auto 0;
  }
`;

export const SecondaryBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #9276c2;
  margin: 0 10px;
  padding: 8px 15px;
  font-size: ${(props) => (props.size || "25px")};
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  margin: 0 10px;
  height: 40px;


  &:hover {
    filter: brightness(0.8);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    margin: auto 0;
  }

`;

const NavButton = (props) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <PrimaryBtn isMobile={isMobile} type="button">
      <span className="icon"> {props.icon}</span>
      {!isMobile && props.children}
    </PrimaryBtn>
  );
};

export default NavButton;
