import React from "react";
import { Service } from "./Service";
import { FilterArea } from "./Filter/Filter";
import { Error } from "../../generic/Error";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { servicesToDisplay } from "../../../store/atoms";
import { getFilteredServices } from "../../../store/selector";

const ServiceHolder = styled.div`
  flex-grow: 3;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
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

export const DisplayServices = ({ error, displayText }) => {
  const services = useRecoilValue(getFilteredServices);

  return (
    <>
      <CategoryName>
        <CategoryHeader>{displayText}</CategoryHeader>
      </CategoryName>
      <CategoryWithFilter>
        {<FilterArea />}
        <ServiceHolder>
          {(error && <Error error={error} />) ||
            services.map((service) => (
              <Service
                key={service.id}
                name={service.name}
                logo={service.logo}
                initialRating={
                  service.ratings.reduce(
                    (sum, elem) => (sum += elem.rating),
                    0
                  ) / service.ratings.length
                }
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
