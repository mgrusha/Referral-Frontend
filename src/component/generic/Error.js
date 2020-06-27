import React from "react";
import styled from "styled-components";

const ErrorText = styled.h3`
  color: red;
  font-size: 1.2rem;
`;

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Error = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorText>
        Following error appear:
        <br /> {error} <br />
        Please contact us via email
      </ErrorText>
    </ErrorContainer>
  );
};

export { Error };
