import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FullLogo } from "../generic/Logo";
import { FormButton } from "../generic/Button";
import { validateUserCredentials, addUser } from "../../services/UserService";

const RegisterForm = styled.form`
  display: flex;
  flexwrap: wrap;
  width: 300px;
  margin: 0 auto;
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

const LogoHolder = styled.div`
  margin: 3rem 0;
`;

const RegisterContainer = styled.div`
  background: var(--header-color);
  height: 100vh;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: rem 1rem;
`;

const ErrorText = styled.li``;

export const Register = (props) => {
  let history = useHistory();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
  });

  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState([]);

  const validateForm = () => {
    const newErrors = [];
    if (user.userName.length < 5) {
      newErrors.push("Username must be 5 characters long");
    }
    if (user.password.length < 5) {
      newErrors.push("Password must be 5 characters long");
    }
    if (user.password !== user.confirmPassword) {
      newErrors.push("Password and Confirm password should match");
    }
    //TODO Fix email verification
    if (user.email.length < 4 || !user.email.includes("@")) {
      newErrors.push("Email should be valid.");
    }
    if (user.firstName < 3) {
      newErrors.push("First Name must be 3 characters long");
    }
    if (user.lastName < 3) {
      newErrors.push("Last Name must be 3 characters long");
    }

    if (newErrors.length !== 0) {
      setError(true);
    }

    setHelperText(newErrors);
    return newErrors.length;
  };

  const succesfulLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    history.push({
      pathname: "/home/categories",
    });
  };
  const unsuccesfulLogin = (error) => {
    setHelperText([...helperText, error]);
  };

  const handleRegister = () => {
    if (validateForm() === 0) {
      const userToAdd = { ...user };
      //TODO IS IT LEGAL?!
      delete userToAdd.confirmPassword;
      addUser(userToAdd, succesfulLogin, unsuccesfulLogin);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleRegister();
    }
  };

  return (
    <RegisterContainer>
      <LogoHolder>
        <FullLogo title="Referral Exchange" slogan="Get your bonus" />
      </LogoHolder>
      <RegisterForm noValidate autoComplete="off">
        <Card>
          <StyledHeader title="Sign Up" />
          <CardContent onKeyPress={(e) => handleKeyPress(e)}>
            <div>
              <ul>
                {helperText.map((error, index) => (
                  <ErrorText key={index} style={{ color: "red" }}>
                    {error}
                  </ErrorText>
                ))}
              </ul>
              <TextField
                error={error}
                fullWidth
                name="userName"
                variant="outlined"
                label="Enter your username"
                placeholder="Username"
                margin="normal"
                value={user.userName}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                error={error}
                fullWidth
                name="password"
                variant="outlined"
                type="password"
                label="Enter your password"
                placeholder="Password"
                margin="normal"
                value={user.password}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                error={error}
                fullWidth
                name="confirmPassword"
                variant="outlined"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                margin="normal"
                value={user.confirmPassword}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                error={error}
                fullWidth
                name="email"
                variant="outlined"
                type="email"
                label="Your email"
                placeholder="Email"
                margin="normal"
                value={user.email}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                error={error}
                fullWidth
                name="firstName"
                variant="outlined"
                label="Your First Name"
                placeholder="First Name"
                margin="normal"
                value={user.firstName}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                error={error}
                fullWidth
                name="lastName"
                variant="outlined"
                label="Your Last Name"
                placeholder="Last Name"
                margin="normal"
                value={user.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </CardContent>
          <StyledCardActions>
            <FormButton
              variant="contained"
              size="large"
              onClick={() => handleRegister()}
            >
              Register
            </FormButton>
            <FormButton
              variant="contained"
              size="large"
              onClick={() => {
                setError(false);
                setHelperText([]);
                setUser({
                  userName: "",
                  password: "",
                  confirmPassword: "",
                  email: "",
                  firstName: "",
                  lastName: "",
                  avatar: "",
                });
              }}
            >
              Clear
            </FormButton>
          </StyledCardActions>
        </Card>
      </RegisterForm>
    </RegisterContainer>
  );
};
