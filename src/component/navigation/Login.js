import React from "react";
import styled from "styled-components";

const User = ({ loggedUser }) => {
  return <button>Hi, {loggedUser}</button>;
};

export { User };
