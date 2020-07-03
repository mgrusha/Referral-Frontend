import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getServiceByServiceName } from "../../../services/ServicesService";
import { Loader } from "../../generic/Loader";
import { DisplayServices } from "./DisplayServices";

const ServiceByName = () => {
  let { serviceName } = useParams();

  const [isLoaded, toogleIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [services, setServices] = useState([]);
  const [servicesToDisplay, setServicesToDisplay] = useState([]);

  useEffect(() => {
    getServiceByServiceName(
      serviceName,
      (services) => {
        setServicesToDisplay(services);
        setServices(services);
      },
      toogleIsLoaded,
      setError
    );
  }, []);

  let successLoading = (
    <>
      <DisplayServices
        displayText={`Results for [${serviceName}]`}
        services={services}
        servicesToDisplay={servicesToDisplay}
        setServicesToDisplay={setServicesToDisplay}
        error={error}
      />
    </>
  );

  return isLoaded ? successLoading : <Loader />;
};

export { ServiceByName };
