import { BACKEND_URL } from "../config/connection";

const getAllCategories = (categoryState) => {
  fetch(`${BACKEND_URL}/categories`)
    .then((response) => response.json())
    .then((data) => categoryState({ data }));
};

export { getAllCategories };
