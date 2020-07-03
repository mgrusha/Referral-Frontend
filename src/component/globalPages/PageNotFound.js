import React from "react";
import { FullLogo } from "../generic/Logo";
import styled from "styled-components";

const ErrorPage = styled.div`
  background-color: var(--header-hover-button-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
`;

const ErrorTextHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

const ErrorText = styled.p`
  font-size: 2rem;
  text-align: center;
  color: var(--main-font-color);
  font-family: var(--main-font-family);
`;

const ErrorCode = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: var(--main-font-color);
  font-family: var(--main-font-family);
`;

export const PageNotFound = () => {
  return (
    <ErrorPage>
      <FullLogo title="Referral Exchange" slogan="Get your bonus" />
      <ErrorTextHolder>
        <ErrorCode>... 404 ...</ErrorCode>
        <ErrorText>It seems you've missed something</ErrorText>
      </ErrorTextHolder>
    </ErrorPage>
  );
};
