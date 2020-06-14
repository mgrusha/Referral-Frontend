import React, { useState } from "react";
import styled from "styled-components";
import { User } from "./Login";
import { Button } from "../generic/Button";
import LinePic from "../../assets/line.png";
import ArrowPicLeft from "../../assets/arrow.png";

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
`;

const Logo = styled.h2`
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 2rem;
`;

const Slogan = styled.h4`
  font-size: 1rem;
  color: white;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
`;

const Arrow = styled.div`
  height: 34px;
  width: 90px;
  background-image: url(${LinePic});
  display: inline-block;
  background-size: contain;
`;
//TODO: ADD TO MIXINS OR FUNCTIONS
const LeftArrow = styled.div`
  background-image: url(${ArrowPicLeft});
  height: 34px;
  width: 34px;
  background-size: cover;
  display: inline-block;
`;
const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;

const Header = () => {
  const [loggedUser, setLoggedUser] = useState({
    loogedInStatus: "LOGGED_IN",
    user: {
      firstName: "Guy",
      lastName: "Fox",
      userName: "Anonymus",
      avatar: "avatar.jpg",
    },
  });

  return (
    <HeaderContainer>
      <MainBar className="container">
        <div>
          <LeftArrow />
          <Arrow />
          <RightArrow />
          <Logo>Referral Exchange</Logo>
          <Slogan>Get your bonus</Slogan>
        </div>
        {loggedUser.loogedInStatus === "NOT_LOGGED_IN" ? (
          <Button>Login</Button>
        ) : (
          <User loggedUser={loggedUser.user} />
        )}
      </MainBar>
    </HeaderContainer>
  );
};

export { Header, LeftArrow, RightArrow };
