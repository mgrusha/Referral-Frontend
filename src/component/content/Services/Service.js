import React from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const ServiceWrap = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 200px;
  margin: 0.7rem;
  color: black;
  background-color white;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px 5px #ccc;
  cursor: pointer;
  position: relative;
`;

const Picture = styled.div`
  background-image: url("${(props) =>
    process.env.PUBLIC_URL + "/static/logos/" + props.picture}
    ");
  height: 50%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const StyledRating = styled(Rating)``;

const Name = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Shown = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  height: 50%;
  justify-content: space-between;
`;

const Service = ({ name, logo, rating, shown, id }) => {
  return (
    <ServiceWrap>
      <Picture picture={logo} />
      <ContentWrapper>
        <StyledRating
          name="rateService"
          defaultValue={rating}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        <Name>{name}</Name>
        <Shown>{shown} uses</Shown>
      </ContentWrapper>
    </ServiceWrap>
  );
};

export { Service };
