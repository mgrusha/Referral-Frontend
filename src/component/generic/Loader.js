import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Loading = styled(CircularProgress)`
  && {
    color: var(--header-color);
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Loading />
    </LoaderContainer>
  );
};

export { Loader };
