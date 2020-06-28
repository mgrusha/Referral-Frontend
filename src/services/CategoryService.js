import { BACKEND_URL } from "../config/connection";

const getAllCategories = (categoryState, toogleIsLoaded, setError) => {
  fetch(`${BACKEND_URL}/categories`)
    .then((response) => response.json())
    .then((data) => {
      categoryState(data);
      toogleIsLoaded(true);
    })
    .catch((error) => {
      setError(error);
      toogleIsLoaded(true);
    });
};

const getCategoryIdByName = (categoryName, setCategoryId) => {
  fetch(`${BACKEND_URL}/categories?name=${categoryName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCategoryId(data[0].id);
    });
};

export { getAllCategories, getCategoryIdByName };
