import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getServiceByCategoryId } from "../../../services/ServicesService";

import { Loader } from "../../generic/Loader";

import { getCategoryIdByName } from "../../../services/CategoryService";
import { DisplayServices } from "./DisplayServices";

const ServicesList = () => {
  let { categoryName } = useParams();
  let { state } = useLocation();

  const [isLoaded, toogleIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [services, setServices] = useState([]);
  const [servicesToDisplay, setServicesToDisplay] = useState([]);
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
    getServiceByCategoryId(categoryId, setServices, toogleIsLoaded, setError);
  }, [categoryId]);

  useEffect(() => setServicesToDisplay(services), [services]);

  let successLoading = (
    <DisplayServices
      displayText={categoryName}
      services={services}
      servicesToDisplay={servicesToDisplay}
      setServicesToDisplay={setServicesToDisplay}
      error={error}
    />
  );

  return isLoaded ? successLoading : <Loader />;
};

export { ServicesList };
