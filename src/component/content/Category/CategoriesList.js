import React, { useState } from "react";
import { Category } from "./Category";
import { SearchBox } from "../SearchBox";

import styled from "styled-components";

const CategoriesHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 1000px) {
    padding-top: 3rem;
  }
`;

const SearchBoxWrapper = styled.div`
  display: block;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const CategoriesList = () => {
  const [categories, setCategories] = useState([
    {
      name: "Taxi",
      numberOfServices: "3",
      picture: "hotel",
      colors: ["#ee497a", "#f05c88"],
    },
    {
      name: "Transport1",
      numberOfServices: "100",
      picture: "taxi",
      startColor: "#ff7a51",
      endColor: "#ff8862",
    },
    {
      name: "Transport2",
      numberOfServices: "15",
      picture: "bicycle",
      startColor: "#32bdba",
      endColor: "#45c3c0",
    },
    {
      name: "Food",
      numberOfServices: "3",
      picture: "utensils",
      startColor: "#45b64a",
      endColor: "#58bd5d",
    },
    {
      name: "Transport3",
      numberOfServices: "30",
      picture: "hotel",
      startColor: "#aeb844",
      endColor: "#b9c452",
    },
    {
      name: "Travel",
      numberOfServices: "30",
      picture: "hotel",
      startColor: "#425ab8",
      endColor: "#596cba",
    },
    {
      name: "Travel1",
      numberOfServices: "30",
      picture: "hotel",
      startColor: "#bf58b1",
      endColor: "#bd35ab",
    },
  ]);

  return (
    <>
      <SearchBoxWrapper>
        <SearchBox />
      </SearchBoxWrapper>
      <CategoriesHolder>
        {categories.map((element) => (
          <Category
            key={element.name}
            numOfServices={element.numberOfServices}
            picture={element.picture}
            categoryName={element.name}
            startColor={element.startColor}
            endColor={element.endColor}
          />
        ))}
      </CategoriesHolder>
    </>
  );
};

export { CategoriesList };
