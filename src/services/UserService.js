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
    })
    .catch(() => loginFailed(userName));
};

const addUser = (user, createSucceed, createFailed) => {
  fetch(`${BACKEND_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createSucceed();
    })
    .catch((error) => createFailed(error));
};

export { validateUserCredentials, addUser };
