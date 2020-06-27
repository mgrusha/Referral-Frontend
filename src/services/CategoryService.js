import { BACKEND_URL } from "../config/connection";

const getAllCategories = (categoryState, toogleIsLoaded, setError) => {
  fetch(`${BACKEND_URL}/categories`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      categoryState(data);
      toogleIsLoaded(true);
    })
    .catch((error) => {
      setError(error);
      toogleIsLoaded(true);
    });
};

export { getAllCategories };
