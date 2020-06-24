import React from "react";
import { Service } from "./Service";
import { SearchBox } from "../SearchBox";

const ServicesList = () => {
  return (
    <>
      <SearchBox />
      <Service />
    </>
  );
};

export { ServicesList };
