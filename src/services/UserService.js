import { BACKEND_URL } from "../config/connection";

const validateUserCredentials = (
  userName,
  userPassword,
  loginSucced,
  loginFailed
) => {
  fetch(`${BACKEND_URL}/users?userName=${userName}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0 && data[0].password === userPassword) {
        loginSucced(data[0]);
      } else {
        loginFailed(userName);
      }
    });
};

export { validateUserCredentials };
