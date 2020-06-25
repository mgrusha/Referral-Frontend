import React from "react";
import styled from "styled-components";

const FilerContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const FilterArea = () => {
  return <FilerContainer>First service</FilerContainer>;
};

export { FilterArea };
