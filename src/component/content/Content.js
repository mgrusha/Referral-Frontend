import React from "react";
import { SearchBox } from "./SearchBox";
import { CategoriesList } from "./Services/CategoriesList";

const Content = () => {
  return (
    <div className="container">
      <SearchBox />
      <CategoriesList />
    </div>
  );
};

export { Content };
