import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FormButton } from "../../generic/Button";
import { getAllCategories } from "../../../services/CategoryService";
import { addService } from "../../../services/ServicesService";
import {
  TextareaAutosize,
  Select,
  FormControl,
  InputLabel,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { Loader } from "../../generic/Loader";

const AddServiceForm = styled.form`
  display: flex;
  flexwrap: wrap;
  width: 300px;
  margin: 3rem auto;
  @media (min-width: 768px) {
    width: 40%;
  }

  font-family: var(--main-font-family);
`;

const StyledHeader = styled(CardHeader)`
  && {
    textalign: center;
    background: #212121;
    color: #fff;
  }
`;

const StyledCardActions = styled(CardActions)`
  && {
    justify-content: space-around;
  }
`;

const ServiceDescription = styled(TextareaAutosize)`
  width: 100%;
  display: block;
`;

const CategorySelector = styled(FormControl)`
  && {
    width: 100%;
    display: block;
    & > div {
      width: 100%;
    }
  }
`;

const FieldsHolder = styled.div`
  & > * {
    margin-top: 1rem;
  }
`;

const ErrorText = styled.li`
  color: red;
  margin-bottom: 0.5rem;
`;

const AddServiceInfo = styled.div`
  background-color: white;
  border: 1px solid;
  border-color: var(--main-font-family);
  border-radius: 10px;
  box-shadow: 0px 0px 6px 6px #fff;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 3rem;
  position: relative;
  & > * {
    margin: 0.5rem 0;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--main-font-family);
`;

const ServiceAddHeader = styled.h2`
  color: green;
  text-align: center;
  font-size: 1.2rem;
`;

const ServiceModalDescription = styled.p`
  text-align: center;
`;

const ServiceName = styled.span`
  font-weight: 700;
`;

export const AddService = () => {
  let history = useHistory();
  const [service, setService] = useState({
    name: "",
    logo: "",
    link: "",
    description: "",
    ratings: [{ userId: 0, rating: 0 }],
    shown: "0",
    categoryId: 0,
  });
  const [categories, setCategories] = useState([]);
  const [isLoaded, toogleIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllCategories(setCategories, toogleIsLoaded, setHelperText);
  }, []);

  const validateForm = () => {
    const newErrors = [];
    if (service.name < 3) {
      newErrors.push("Service name must be at least 3 characters long");
    }
    if (service.categoryId === "" || service.categoryId === 0) {
      newErrors.push("Choose the category");
    }
    if (!isURL(service.link)) {
      newErrors.push("Link to referral should be in correct format");
    }

    if (newErrors.length !== 0) {
      setError(true);
    }

    setHelperText(newErrors);
    return newErrors.length;
  };

  //TODO Don't know what I am doing there
  const isURL = (link) => {
    let res = link.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  };

  const succesfulAdd = (service) => {
    setOpen(true);
    let timeOutId = setTimeout(() => {
      setOpen(false);
      history.push({
        pathname: "/categories",
      });
      clearTimeout(timeOutId);
    }, 2000);
  };
  const unsuccesfulAdd = (error) => {
    setHelperText([...helperText, error]);
    setError(true);
  };

  const handleAdd = () => {
    if (validateForm() === 0) {
      addService(service, succesfulAdd, unsuccesfulAdd);
    }
  };

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleAdd();
    }
  };

  return (
    <>
      <AddServiceForm noValidate autoComplete="off">
        <Card>
          <StyledHeader title="Add Service" />
          <CardContent onKeyPress={(e) => handleKeyPress(e)}>
            <FieldsHolder>
              <ul>
                {helperText.map((error, index) => (
                  <ErrorText key={index}>{error}</ErrorText>
                ))}
              </ul>
              {isLoaded ? (
                <CategorySelector variant="outlined">
                  <InputLabel htmlFor="categories-id">Category</InputLabel>
                  <Select
                    error={error}
                    native
                    name="categoryId"
                    value={service.categoryId}
                    onChange={(e) =>
                      setService({
                        ...service,
                        ["categoryId"]: Number(e.target.value),
                      })
                    }
                  >
                    <option aria-label="None" value="" />
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </Select>
                </CategorySelector>
              ) : (
                <Loader />
              )}
              <TextField
                error={error}
                fullWidth
                name="name"
                variant="outlined"
                label="Enter the Service Name"
                placeholder="Service Name"
                margin="normal"
                value={service.userName}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                error={error}
                fullWidth
                name="link"
                variant="outlined"
                label="Add your referral"
                placeholder="Referral"
                margin="normal"
                value={service.link}
                onChange={(e) => handleChange(e)}
              />
              <ServiceDescription
                name="description"
                label="Description"
                placeholder="Description"
                margin="normal"
                rowsMin={3}
                value={service.description}
                onChange={(e) => handleChange(e)}
              />
            </FieldsHolder>
          </CardContent>
          <StyledCardActions>
            <FormButton
              variant="contained"
              size="large"
              onClick={() => handleAdd()}
            >
              Add Service
            </FormButton>
            <StyledModal
              aria-labelledby="success-add-modal"
              open={open}
              onClose={() => setOpen(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <AddServiceInfo>
                  <ServiceAddHeader id="success-add-modal">
                    Service added
                  </ServiceAddHeader>
                  <ServiceModalDescription id="success-add-description">
                    Service <ServiceName>{service.name}</ServiceName> added
                    succesfully!
                  </ServiceModalDescription>
                </AddServiceInfo>
              </Fade>
            </StyledModal>
            <FormButton
              variant="contained"
              size="large"
              onClick={() => {
                setError(false);
                setHelperText([]);
                setService({
                  name: "",
                  logo: "",
                  link: "",
                  description: "",
                  ratings: [],
                  shown: "0",
                  categoryId: 0,
                });
              }}
            >
              Clear
            </FormButton>
          </StyledCardActions>
        </Card>
      </AddServiceForm>
    </>
  );
};
