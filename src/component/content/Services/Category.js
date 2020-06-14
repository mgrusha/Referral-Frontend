import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryWrap = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 200px;
  margin: 0.7rem;
  color: var(--main-font-color);
  padding: 2rem;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.startColor || "#ee497a"} 25%,
    ${(props) => props.endColor || "#f05c88"} 25%,
    ${(props) => props.endColor || "#f05c88"} 50%,
    ${(props) => props.startColor || "#ee497a"} 50%,
    ${(props) => props.startColor || "#ee497a"} 75%,
    ${(props) => props.endColor || "#f05c88"} 75%,
    ${(props) => props.endColor || "#f05c88"} 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

const CategoryIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
`;

const CategoryTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--main-font-family);
`;
const CategoryName = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ServicesCount = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;

const Category = ({
  categoryName,
  numOfServices,
  picture,
  startColor,
  endColor,
}) => {
  return (
    <CategoryWrap startColor={startColor} endColor={endColor}>
      <CategoryIcon icon={picture} />
      <CategoryTextHolder>
        <CategoryName>{categoryName}</CategoryName>
        <ServicesCount>{numOfServices} services</ServicesCount>
      </CategoryTextHolder>
    </CategoryWrap>
  );
};

export { Category };
