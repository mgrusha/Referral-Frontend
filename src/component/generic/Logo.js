import styled from "styled-components";
import React from "react";
import LinePic from "../../assets/line.png";
import ArrowPicLeft from "../../assets/arrow.png";
import { NavLink } from "react-router-dom";

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

const Logo = styled.h2`
  color: white;
  font-family: var(--main-font-family);
  font-style: italic;
  font-weight: 900;
  font-size: 2rem;
`;

const Slogan = styled.h4`
  font-size: 1rem;
  color: white;
  font-weight: 700;
  font-family: var(--main-font-family);
`;

const FullLogo = ({ title, slogan }) => {
  return (
    <NavLink strict to={`/`}>
      <LeftArrow />
      <Arrow />
      <RightArrow />
      <Logo>{title}</Logo>
      <Slogan>{slogan}</Slogan>
    </NavLink>
  );
};

export { Arrow, LeftArrow, RightArrow, Logo, Slogan, FullLogo };
