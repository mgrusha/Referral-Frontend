import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const StyledAvatar = styled(Avatar)`
  && {
    height: 4rem;
    width: 4rem;
    cursor: pointer;
  }
`;

const User = ({ loggedUser }) => {
  let acronym =
    loggedUser.firstName !== "" && loggedUser.lastName !== ""
      ? loggedUser.firstName.substring(0, 1) +
        loggedUser.lastName.substring(0, 1)
      : loggedUser.userName.substring(0, 3);
  if (loggedUser.avatar !== "") {
    console.log(process.env.PUBLIC_URL + `static/avatars/${loggedUser.avatar}`);
    return (
      <StyledAvatar
        alt={loggedUser.userName}
        src={`../../../static/avatars/${loggedUser.avatar}`}
      />
    );
  } else {
    return <StyledAvatar alt={loggedUser.userName}>{acronym}</StyledAvatar>;
  }
};

export { User };
