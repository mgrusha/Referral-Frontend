import React, { useState } from "react";
import styled from "styled-components";
import { User } from "./Login";
import { Button } from "../generic/Button";

const HeaderContainer = styled.header`
  background-color: rgb(116, 31, 162);
  width: 100%;
`;

const MainBar = styled.div`
  position: relative;
  display: flex;
`;

const Logo = styled.h2`
  color: white;
  font-family: "Nunito", "Roboto";
  font-size: 4rem;
`;

const Header = () => {
  const [loggedUser, setLoggedUser] = useState({
    loogedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

  return (
    <HeaderContainer>
      <MainBar className="container">
        <Logo>Referral Exchange</Logo>
        {loggedUser.loogedInStatus === "NOT_LOGGED_IN" ? (
          <Button>Login</Button>
        ) : (
          <User loggedUser={loggedUser.user} />
        )}
      </MainBar>
    </HeaderContainer>
  );
};

export { Header };
