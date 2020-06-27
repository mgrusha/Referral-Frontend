import React from "react";
import styled from "styled-components";

const EmailLink = styled.a`
  color: white;
  &:active {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Email = () => {
  return (
    <div>
      <EmailLink href="mailto: mykyta.grusha@gmail.com">
        mykyta.grusha@gmail.com
      </EmailLink>
    </div>
  );
};

export { Email };
