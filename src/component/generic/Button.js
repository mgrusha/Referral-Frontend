import React from "react";
import styled from "styled-components";

const RoundButton = styled.button`
  font-size: 1.5rem;
  font-family: "Nunito", "Roboto";
  font-weight: bold;
  height: 2.5rem;
  min-width: auto;
  flex: 0 1 auto;
  padding: 0px 1rem;
  font-family: "Nunito", "Roboto";
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  background-color: transparent;
  border: 0px;
  :hover {
    background-color: rgb(167, 81, 212);
  }
`;

const Button = (props) => {
  return <RoundButton>{props.children}</RoundButton>;
};

export { Button };
