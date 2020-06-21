import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const StyledAvatar = styled(Avatar)`
  && {
    height: 4rem;
    width: 4rem;
    cursor: pointer;
  }
`;

const UserIcon = ({ loggedUser, logOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let acronym =
    loggedUser.firstName !== "" && loggedUser.lastName !== ""
      ? loggedUser.firstName.substring(0, 1) +
        loggedUser.lastName.substring(0, 1)
      : loggedUser.userName.substring(0, 3);
  let avatar;
  if (loggedUser.avatar !== "") {
    avatar = (
      <StyledAvatar
        aria-controls="customized-avatar"
        alt={loggedUser.userName}
        src={process.env.PUBLIC_URL + `/static/avatars/${loggedUser.avatar}`}
        onClick={handleClick}
      />
    );
  } else {
    avatar = (
      <StyledAvatar alt={loggedUser.userName} onClick={handleClick}>
        {acronym}
      </StyledAvatar>
    );
  }

  return (
    <div>
      {avatar}
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        id="customized-avatar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Change settings</MenuItem>
        <MenuItem
          onClick={() => {
            logOut();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export { UserIcon };
