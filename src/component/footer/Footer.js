import React from "react";
import styled from "styled-components";
import { Email } from "./Email";
import { Information } from "./Information";

const FooterContainer = styled.footer``;

const Footer = () => {
  return (
    <FooterContainer>
      <Email />
      <Information />
    </FooterContainer>
  );
};

export { Footer };
