import React, { useState, useEffect } from "react";
import { Service } from "./Service";
import { FilterArea } from "./Filter";
import { useParams, useLocation } from "react-router-dom";
import {
  getServiceByCategoryId,
  getServiceByServiceName,
} from "../../../services/ServicesService";
import styled from "styled-components";
import { Loader } from "../../generic/Loader";
import { Error } from "../../generic/Error";
import { getCategoryIdByName } from "../../../services/CategoryService";

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

const ServicesList = () => {
  let { serviceName } = useParams();
  let { categoryName } = useParams();
  let { state } = useLocation();

  const [isLoaded, toogleIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [services, setServices] = useState([]);
  const [categoryId, setCategoryId] = useState();

  //Not sure if it is right
  useEffect(() => {
    if (state) {
      setCategoryId(state.categoryId);
    } else {
      getCategoryIdByName(categoryName, setCategoryId);
    }
  }, []);

  useEffect(() => {
    serviceName
      ? getServiceByServiceName(
          serviceName,
          setServices,
          toogleIsLoaded,
          setError
        )
      : getServiceByCategoryId(
          categoryId,
          setServices,
          toogleIsLoaded,
          setError
        );
  }, [categoryId]);

  let successLoading = (
    <>
      <CategoryName>
        <CategoryHeader>
          {categoryName ? categoryName : `Results for [${serviceName}]`}
        </CategoryHeader>
      </CategoryName>
      <CategoryWithFilter>
        <FilterArea />
        <ServiceHolder>
          {(error && <Error error={error} />) ||
            services.map((service) => (
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

  return isLoaded ? successLoading : <Loader />;
};

export { ServicesList };
