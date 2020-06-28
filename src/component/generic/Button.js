import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const RoundButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  height: 2.5rem;
  min-width: auto;
  flex: 0 1 auto;
  padding: 1.5rem 2rem;
  font-family: var(--main-font-family);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: transparent;
  border: 0px;
  color: white;
  :hover {
    background-color: var(--header-hover-button-color);
  }
  :focus {
    outline: none;
  }
`;

const HeaderButton = (props) => {
  return <RoundButton onClick={props.onClick}>{props.children}</RoundButton>;
};

const FormButton = styled(Button)`
  && {
    background-color: var(--header-color);
    color: white;
    &:hover {
      background-color: var(--header-hover-button-color);
    }
  }
`;

export { HeaderButton as Button, FormButton };
