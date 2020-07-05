import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { ServiceModal } from "./ServiceModal";
import { rateForService } from "../../../services/ServicesService";

const ServiceWrap = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 200px;
  margin: 0.7rem;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 7px #ccc;
  cursor: pointer;
  position: relative;
  font-family: var(--main-font-family);
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

const Service = ({
  id,
  name,
  logo,
  initialRating,
  shown,
  link,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    if (rating && rating !== initialRating) {
      rateForService(rating, JSON.parse(localStorage.getItem("user")).id, id);
    }
  }, [rating]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRateChange = (e, newValue) => {
    e.stopPropagation();
    setRating(newValue);
  };

  return (
    <>
      <ServiceWrap onClick={handleOpen}>
        <Picture picture={logo} />
        <ContentWrapper>
          <Rating
            name={"rateService" + id}
            defaultValue={rating}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            value={rating}
            onChange={handleRateChange}
            onClick={(e) => e.stopPropagation()}
            readOnly={!Boolean(JSON.parse(localStorage.getItem("user")))}
          />

          <Name>{name}</Name>
          <Shown>{shown} uses</Shown>
        </ContentWrapper>
      </ServiceWrap>
      <ServiceModal
        name={name}
        logo={logo}
        description={description}
        open={open}
        handleClose={handleClose}
        linkToService={link}
        handleRateChange={handleRateChange}
        id={id}
        rating={rating}
      />
    </>
  );
};

export { Service };
