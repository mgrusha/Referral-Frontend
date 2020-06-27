import React from "react";
import styled from "styled-components";
import { Email } from "./Email";
import { Information } from "./Information";

const FooterContainer = styled.footer`
  background-color: var(--header-color);
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 4rem;
`;

const FooterBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
  font-family: var(--main-font-family);
  color: white;
  padding: 1rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBar className="container">
        <Information />
        <Email />
      </FooterBar>
    </FooterContainer>
  );
};

export { Footer };
