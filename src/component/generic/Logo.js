import styled from "styled-components";
import React from "react";
import LinePic from "../../assets/line.png";
import ArrowPicLeft from "../../assets/arrow.png";
import { useHistory } from "react-router-dom";

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

const FullLogo = ({ title, slogan }) => {
  let history = useHistory();
  return (
    <div
      onClick={() =>
        history.push({
          pathname: "/",
        })
      }
    >
      <LeftArrow />
      <Arrow />
      <RightArrow />
      <Logo>{title}</Logo>
      <Slogan>{slogan}</Slogan>
    </div>
  );
};

export { Arrow, LeftArrow, RightArrow, Logo, Slogan, FullLogo };
