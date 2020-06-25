import React, { useState } from "react";
import { Service } from "./Service";
import { SearchBox } from "../SearchBox";
import { FilterArea } from "./Filter";

import styled from "styled-components";

const ServiceHolder = styled.div`
  flex-grow: 3;
  flex-wrap: wrap;
  display: flex;
`;

const CategoryWithFilter = styled.main`
  display: flex;
`;

const CategoryName = styled.div`
  background-color: white;
  padding: 0.5rem;
  font-family: var(--main-font-family);
`;

const CategoryHeader = styled.h2`
  font-weight: 700;
  font-size: 3rem;
`;

const Services = [
  {
    name: "Booking.com",
    logo: "Booking.com.jpg",
    link: "https://www.booking.com/s/35_8/a46d7e72",
    description:
      "Receive 5 commission-free bookings and Also you will receive a travel credit worth € 100. This travel credit will be sent 30-60 days after check out and can be used when booking next trip with us",
    rating: 4,
    shown: 553,
    id: 1,
  },
  {
    name: "Hotels.com",
    logo: "hotels-com-logo.jpg",
    link: "https://refer.hotels.com/x/rQs1mL",
    description:
      "Referee : save £50 by entering one of our referral codes (Referrer : £50 reward as well) ",
    rating: 3,
    shown: 553,

    id: 2,
  },
  {
    name: "AirBnB",
    logo: "airbnb.jpg",
    link:
      "https://www.airbnb.com/c/1ec1f1?currency=PLN&referral_share_id=ab6cd194-7b88-4014-a39c-72a2d3d13b0c",
    description:
      "Get £50 by using one of our referral link when subscribing (referrers: get £100) ",
    rating: 2,
    shown: 230,

    id: 4,
  },
  {
    name: "Unknown Hotel",
    logo: "empty",
    link: "empty",
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
        <CategoryHeader>Hotels{title}</CategoryHeader>
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
              link={service.link}
              description={service.description}
            />
          ))}
        </ServiceHolder>
      </CategoryWithFilter>
    </>
  );
};

export { ServicesList };
