import React, { useState, useEffect } from "react";
import { Button } from "../generic/Button";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { FormButton } from "../generic/Button";
import { NavLink } from "react-router-dom";

const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const MenuItem = styled.div`
  padding: 0.5rem 0;
  width: 100%;

  & > button {
    width: 100%;
  }
`;

export const LoginIcon = ({ logIn }) => {
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
      <Button onClick={handleClick}>Login</Button>
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
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <FieldBox>
          <MenuItem>
            <TextField
              id="loginField"
              label="Username"
              variant="outlined"
              value={login}
              onChange={(e) => {
                e.stopPropagation();
                setLogin(e.target.value);
              }}
              tabIndex={0}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="passwordField"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              tabIndex={1}
              onChange={(e) => {
                e.stopPropagation();
                setPassword(e.target.value);
              }}
            />
          </MenuItem>
          <MenuItem>
            <FormButton
              variant="contained"
              onClick={handleLogIn}
              tabIndex={3}
              disabled={IsButtonDisabled}
            >
              Login
            </FormButton>
          </MenuItem>
          <MenuItem>
            <FormButton
              variant="contained"
              tabIndex={4}
              onClick={(e) => e.preventDefault()}
            >
              <NavLink
                strict
                to={`/register`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </NavLink>
            </FormButton>
          </MenuItem>
        </FieldBox>
      </Menu>
    </div>
  );
};
