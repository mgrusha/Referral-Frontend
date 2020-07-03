import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Input from "@material-ui/core/Input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import CloseRounded from "@material-ui/icons/CloseRounded";
import { FormButton } from "../../generic/Button";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--main-font-family);
`;

const CopiedText = styled.h5`
  color: green;
  font-size: 1.2rem;
`;

const ServiceInfo = styled.div`
  background-color: white;
  border: 1px solid;
  border-color: var(--main-font-family);
  border-radius: 10px;
  box-shadow: 0px 0px 6px 6px #fff;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  padding: 3rem;
  position: relative;
  & > * {
    margin: 0.5rem 0;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--main-font-family);
`;

const StyledClose = styled(CloseRounded)`
  color: var(--header-color);
  position: absolute;
  top: 1rem;
  right: 1rem;
  :hover {
    background-color: var(--header-hover-button-color);
    color: white;
  }
`;

const StyledDescription = styled.p`
  font-family: var(--main-font-family);
  font-size: 0.9rem;
`;

const Picture = styled.div`
  background-image: url("${(props) =>
    process.env.PUBLIC_URL + "/static/logos/" + props.picture}
    ");
  height: 50%;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ServiceModal = ({
  id,
  handleRateChange,
  handleClose,
  open,
  rating,
  linkToService,
  description,
  name,
  logo,
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <StyledModal
      aria-labelledby={name}
      open={open}
      onClose={() => {
        handleClose();
        setCopied(false);
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ServiceInfo>
          <ServiceTitle>{name}</ServiceTitle>
          <Picture picture={logo} />
          <StyledClose
            onClick={() => {
              handleClose();
              setCopied(false);
            }}
          />
          <StyledDescription>{description}</StyledDescription>
          {JSON.parse(localStorage.getItem("user")) && (
            <Rating
              name={"rateService" + id}
              defaultValue={rating}
              value={rating}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onClick={(e) => e.stopPropagation()}
              onChange={handleRateChange}
            />
          )}
          <Input value={linkToService} variant="outlined" />

          <CopyToClipboard text={linkToService} onCopy={() => setCopied(true)}>
            <FormButton variant="contained">Copy to clipboard</FormButton>
          </CopyToClipboard>
          <CopiedText>&nbsp;{copied && "Copied."}</CopiedText>
        </ServiceInfo>
      </Fade>
    </StyledModal>
  );
};

export { ServiceModal };
