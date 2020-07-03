import React, { useState, useEffect } from "react";
import { Category } from "./Category";
import { SearchBox } from "../SearchBox";
import { Loader } from "../../generic/Loader";
import { Error } from "../../generic/Error";
import styled from "styled-components";
import { getAllCategories } from "../../../services/CategoryService";

const CategoriesHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1000px) {
    padding-top: 3rem;
    padding-right: 5rem;
    padding-left: 5rem;
  }
`;

const SearchBoxWrapper = styled.div`
  display: block;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoaded, toogleIsLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(
    () => getAllCategories(setCategories, toogleIsLoaded, setError),
    []
  );

  let successLoading = (
    <>
      <SearchBoxWrapper>
        <SearchBox />
      </SearchBoxWrapper>
      <CategoriesHolder>
        {(error && <Error error={error} />) ||
          categories.map((element) => (
            <Category
              key={element.name}
              numOfServices={element.numberOfServices}
              picture={element.picture}
              categoryName={element.name}
              startColor={element.startColor}
              endColor={element.endColor}
              categoryId={element.id}
            />
          ))}
      </CategoriesHolder>
    </>
  );

  return isLoaded ? successLoading : <Loader />;
};

export { CategoriesList };
