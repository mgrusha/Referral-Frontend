import React, { useState, useEffect } from "react";
import { Button } from "../generic/Button";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import MaterialButton from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const LoginIcon = ({ logIn }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [IsButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (login.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [login, password]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogIn = () => {
    logIn(login, password);
  };
  return (
    <div>
      <Button onClick={handleClick}>{!anchorEl && "Login"}</Button>
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <FieldBox>
          <TextField
            id="loginField"
            label="Username"
            variant="outlined"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            tabIndex={0}
          />
          <TextField
            id="passwordField"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            tabIndex={1}
            onChange={(e) => setPassword(e.target.value)}
          />
          <MaterialButton
            variant="contained"
            onClick={handleLogIn}
            tabIndex={3}
            disabled={IsButtonDisabled}
          >
            Login
          </MaterialButton>
          <MaterialButton
            variant="contained"
            tabIndex={4}
            onClick={() =>
              history.push({
                pathname: "/register",
              })
            }
          >
            Register
          </MaterialButton>
        </FieldBox>
      </Menu>
    </div>
  );
};
