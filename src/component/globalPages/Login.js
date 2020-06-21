import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flexwrap: wrap;
  width: 400;
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
    justify-content: center;
  }
`;

const LoginContainer = styled.div`
  background: var(--header-color);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Login = ({ userName, intialError }) => {
  const [username, setUsername] = useState(userName || "");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState(intialError);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    if (username === "abc@email.com" && password === "password") {
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
              color="secondary"
              onClick={() => handleLogin()}
              disabled={isButtonDisabled}
            >
              Login
            </Button>
          </StyledCardActions>
        </Card>
      </LoginForm>
    </LoginContainer>
  );
};
