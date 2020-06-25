import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Input from "@material-ui/core/Input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@material-ui/core";

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

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--main-font-family);
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

const ServiceInfo = styled.div`
  background-color: white;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 6px #fff;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 3rem;
  position: relative;
`;

const CopiedText = styled.h5`
  color: green;
  font-size: 1.2rem;
`;

const Service = ({ name, logo, rating, shown, link, description }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [linkToService, setLinkToService] = useState(link);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ServiceWrap onClick={handleOpen}>
        <Picture picture={logo} />
        <ContentWrapper>
          <Rating
            name="rateService"
            defaultValue={rating}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
          <Name>{name}</Name>
          <Shown>{shown} uses</Shown>
        </ContentWrapper>
      </ServiceWrap>
      <StyledModal
        aria-labelledby={name}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ServiceInfo>
            <h3>{name}</h3>
            <p>{description}</p>
            <Rating
              name="rateService"
              defaultValue={rating}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
            <Input value={linkToService} variant="outlined" />

            <CopyToClipboard
              text={linkToService}
              onCopy={() => setCopied(true)}
            >
              <Button variant="contained">Copy to clipboard</Button>
            </CopyToClipboard>
            {copied && <CopiedText>Copied.</CopiedText>}
          </ServiceInfo>
        </Fade>
      </StyledModal>
    </>
  );
};

export { Service };
