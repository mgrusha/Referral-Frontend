import React, { useState } from "react";
import styled from "styled-components";
import { Login } from "./Login";
import { SignIn } from "./SignIn";

const HeaderContainer = styled.header``;

const Header = () => {
  const [loggedUser, setLoggedUser] = useState({
    loogedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

  return (
    <HeaderContainer>
      {loggedUser.loogedInStatus === "NOT_LOGGED_IN" ? (
        <SignIn />
      ) : (
        <Login loggedUser={loggedUser.user} />
      )}
    </HeaderContainer>
  );
};

export { Header };
