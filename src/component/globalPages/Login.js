import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FullLogo } from "../generic/Logo";

const LoginForm = styled.form`
  display: flex;
  flexwrap: wrap;

  margin: 0 auto;
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
  margin-bottom: 3rem;
`;

const LoginContainer = styled.div`
  background: var(--header-color);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1rem;
`;

export const Login = (props) => {
  let history = useHistory();
  const [userName, setUsername] = useState(
    props.location.state ? props.location.state.userName : ""
  );
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState(
    props.location.state ? props.location.state.initialError : ""
  );
  const [error, setError] = useState(Boolean(props.location.state));

  useEffect(() => {
    if (userName.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [userName, password]);

  const handleLogin = () => {
    if (userName === "abc@email.com" && password === "password") {
      setError(false);
      setHelperText("Login Successfully");
    } else {
      setError(true);
      setHelperText("Incorrect username or password");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleLogin();
    }
  };

  return (
    <LoginContainer>
      <LogoHolder>
        <FullLogo title="Referral Exchange" slogan="Get your bonus" />
      </LogoHolder>
      <LoginForm noValidate autoComplete="off">
        <Card>
          <StyledHeader title="Login" />
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="username"
                variant="outlined"
                label="Username"
                placeholder="Username"
                margin="normal"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                variant="outlined"
                label="Password"
                placeholder="Password"
                margin="normal"
                value={password}
                helperText={helperText}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </div>
          </CardContent>
          <StyledCardActions>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleLogin()}
              disabled={isButtonDisabled}
            >
              Login
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() =>
                history.push({
                  pathname: "/register",
                })
              }
            >
              SIGN UP
            </Button>
          </StyledCardActions>
        </Card>
      </LoginForm>
    </LoginContainer>
  );
};
