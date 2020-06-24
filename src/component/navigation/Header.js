import React, { useState } from "react";
import styled from "styled-components";
import { UserIcon } from "./UserIcon";
import { useHistory } from "react-router-dom";

import { LoginIcon } from "./LoginIcon";
import { FullLogo } from "../generic/Logo";
import { SearchBox } from "../content/SearchBox";

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

const Header = (props) => {
  let history = useHistory();

  const [loggedStatus, setLoggedStatus] = useState(true);
  const [loggedUser, setLoggedUser] = useState({
    firstName: "Guy",
    lastName: "Fox",
    userName: "Anonymus",
    avatar: "avatar.jpg",
  });

  const logIn = (login, password) => {
    if (login === "Anonymus" && password === "password") {
      setLoggedStatus(true);
      setLoggedUser({
        firstName: "Guy",
        lastName: "Fox",
        userName: "Anonymus",
        avatar: "avatar.jpg",
      });
    } else {
      history.push({
        pathname: "/login",
        state: {
          userName: login,
          initialError: "Incorrect username or password",
        },
      });
    }
  };

  const logOut = () => {
    setLoggedStatus(false);
  };

  return (
    <HeaderContainer>
      <MainBar className="container">
        <FullLogo title="Referral Exchange" slogan="Get your bonus" />
        <SearchBoxWrapper>
          <SearchBox />
        </SearchBoxWrapper>
        {loggedStatus ? (
          <UserIcon loggedUser={loggedUser} logOut={logOut} />
        ) : (
          <LoginIcon logIn={logIn} />
        )}
      </MainBar>
    </HeaderContainer>
  );
};

export { Header };
