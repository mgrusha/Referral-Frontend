import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getServiceByServiceName } from "../../../services/ServicesService";
import { Loader } from "../../generic/Loader";
import { DisplayServices } from "./DisplayServices";
import { useSetRecoilState } from "recoil";
import { servicesToDisplay } from "../../../store/atoms";

const ServiceByName = () => {
  let { serviceName } = useParams();

  const [isLoaded, toogleIsLoaded] = useState(false);
  const [error, setError] = useState();
  const setDisplayServices = useSetRecoilState(servicesToDisplay);

  useEffect(() => {
    getServiceByServiceName(
      serviceName,
      (services) => {
        setDisplayServices(services);
      },
      toogleIsLoaded,
      setError
    );
  }, [serviceName]);

  let successLoading = (
    <>
      <DisplayServices
        displayText={`Results for [${serviceName}]`}
        error={error}
      />
    </>
  );

  return isLoaded ? successLoading : <Loader />;
};

export { ServiceByName };
