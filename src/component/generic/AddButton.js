import React from "react";
import styled from "styled-components";

const CircleWithPlus = styled.button`
  background-color: var(--header-color);
  width: 4rem;
  height: 4rem;
  overflow: visible;
  border-radius: 100%;
  text-align: center;
  line-height: 56px;
  font-size: 3rem;
  color: rgba(255, 255, 255, 1);

  &:before {
    position: relative;
    z-index: 100;
    content: "+";
  }
  &:hover {
    cursor: pointer;
    background-color: var(--header-hover-button-color);
  }
  &:active {
    outline: none;
  }

  &:visited {
    text-decoration: none;
  }
`;

export const AddButton = ({ onClick }) => {
  return <CircleWithPlus title="Add referral" onClick={onClick} />;
};
