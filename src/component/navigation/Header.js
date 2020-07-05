import React, { useState } from "react";
import styled from "styled-components";
import { UserIcon } from "./UserIcon";
import { useHistory } from "react-router-dom";

import { LoginIcon } from "./LoginIcon";
import { FullLogo } from "../generic/Logo";
import { SearchBox } from "../content/SearchBox";
import { validateUserCredentials } from "../../services/UserService";

const HeaderContainer = styled.header`
  background-color: var(--header-color);
  width: 100%;
`;

const MainBar = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchBoxWrapper = styled.div`
  flex-grow: 2;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  let history = useHistory();

  const [loggedUser, setLoggedUser] = useState({
    loggedStatus: Boolean(localStorage.getItem("user")),
    user: JSON.parse(localStorage.getItem("user")),
  });

  const loginSucced = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setLoggedUser({ loggedStatus: true, user: user });
    history.go();
  };

  const loginFailed = (login) => {
    history.push({
      pathname: "/login",
      state: {
        userName: login,
        initialError: "Incorrect username or password",
      },
    });
  };

  const logIn = (login, password) => {
    validateUserCredentials(login, password, loginSucced, loginFailed);
  };

  const logOut = () => {
    setLoggedUser({ loggedStatus: false, user: {} });
    localStorage.clear();
    history.go();
  };

  return (
    <HeaderContainer>
      <MainBar className="container">
        <FullLogo title="Referral Exchange" slogan="Get your bonus" />
        <SearchBoxWrapper>
          <SearchBox />
        </SearchBoxWrapper>
        {loggedUser.loggedStatus ? (
          <UserIcon
            loggedUser={loggedUser.user}
            logOut={logOut}
            logIn={logIn}
          />
        ) : (
          <LoginIcon logIn={logIn} />
        )}
      </MainBar>
    </HeaderContainer>
  );
};

export { Header };
