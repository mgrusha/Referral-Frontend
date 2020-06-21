import React from "react";
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

const User = ({ loggedUser }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Change settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export { User };
