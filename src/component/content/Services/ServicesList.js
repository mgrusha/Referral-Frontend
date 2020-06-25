import React, { useState } from "react";
import { Service } from "./Service";
import { SearchBox } from "../SearchBox";
import { FilterArea } from "./Filter";

import styled from "styled-components";

const ServiceHolder = styled.div``;

const CategoryWithFilter = styled.main``;

const CategoryName = styled.div`
  background-color: white;
`;

const CategoryHeader = styled.h2`
  background-color: white;
`;

const Services = [
  {
    name: "Booking.com",
    logo: "Booking.com.jpg",
    rating: 4,
    shown: 553,
    id: 1,
  },
  {
    name: "Hotels.com",
    logo: "hotels-com-logo.jpg",
    rating: 3,
    shown: 553,

    id: 2,
  },
  {
    name: "AirBnB",
    logo: "airbnb.jpg",
    rating: 2,
    shown: 230,

    id: 4,
  },
  {
    name: "Unknown Hotel",
    logo: "empty",
    rating: 4,
    shown: 10,

    id: 5,
  },
];

const ServicesList = ({ title }) => {
  const [services, setServices] = useState(Services);
  return (
    <>
      <CategoryName>
        <CategoryHeader>{title}</CategoryHeader>
      </CategoryName>
      <CategoryWithFilter>
        <FilterArea />
        <ServiceHolder>
          {services.map((service) => (
            <Service
              key={service.id}
              name={service.name}
              logo={service.logo}
              rating={service.rating}
              shown={service.shown}
              isStared={service.isStared}
              id={service.id}
            />
          ))}
        </ServiceHolder>
      </CategoryWithFilter>
    </>
  );
};

export { ServicesList };
