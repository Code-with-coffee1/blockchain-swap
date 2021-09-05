import React from "react";
import styled from "styled-components";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
const FooterContainer = styled.div`
  padding: 10px;
  margin-top: auto;
  border-top: 2px solid #eee;
  & footer {
    text-align: center;
    margin: 1rem 0;
  }
  & a {

    text-decoration: none;
    color: #9276c2;
    
  }
`;
const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #9276c2;
`;
const SidebarFooter = (props) => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <TelegramIcon />
        <TwitterIcon />
      </SocialIconsContainer>
      <footer>
        <a href="/">Contact us</a>
      </footer>
    </FooterContainer>
  );
};

export default SidebarFooter;
