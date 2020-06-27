import React from "react";
import styled from "styled-components";

const FooterTitle = styled.h5`
  font-style: italic;
`;

const FooterSlogan = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;

const Information = () => {
  return (
    <div>
      <FooterTitle>Referral Exchange</FooterTitle>
      <FooterSlogan>Get your bonus</FooterSlogan>
    </div>
  );
};

export { Information };
