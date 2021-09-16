import React from "react";
import styled from "styled-components";
const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 193, 212);
  background: linear-gradient(107deg, rgba(0, 193, 212, 0.2) 0%, rgba(191, 167, 232, 0.2) 86%);
`;

const Header = styled.div`
  padding: 1rem;
  width: 80vw;
  max-width: 1200px;
  & h1 {
    font-size: 3rem;
    color: var(--pink-light);
  }
  & h3 {
    font-size: 1.5rem;

    color: var(--pink-dark);
  }
  & h5 {
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--blue-light);
  }
  & h5 a {
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--blue-light);
  }
`;

const PageHeader = (props) => {
  return (
    <PageHeaderContainer>
      <Header>{props.children}</Header>
    </PageHeaderContainer>
  );
};

export default PageHeader;
