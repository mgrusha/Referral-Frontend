import { BACKEND_URL } from "../config/connection";

const getAllServices = (serviceState, toogleIsLoaded, setError) => {
  fetch(`${BACKEND_URL}/services`)
    .then((response) => response.json())
    .then((data) => {
      serviceState(data);
      toogleIsLoaded(true);
    })
    .catch((error) => {
      setError(error);
      toogleIsLoaded(true);
    });
};

const getServiceByCategoryId = (
  categoryId,
  serviceState,
  toogleIsLoaded,
  setError
) => {
  fetch(`${BACKEND_URL}/services`)
    .then((response) => response.json())
    .then((data) => {
      serviceState(data.filter((service) => service.categoryId == categoryId));
      toogleIsLoaded(true);
    })
    .catch((error) => {
      setError(error);
      toogleIsLoaded(true);
    });
};

const getServiceByServiceName = (
  serviceName,
  serviceState,
  toogleIsLoaded,
  setError
) => {
  fetch(`${BACKEND_URL}/services`)
    .then((response) => response.json())
    .then((data) => {
      serviceState(
        data.filter((service) => service.name.includes(serviceName || ""))
      );
      toogleIsLoaded(true);
    })
    .catch((error) => {
      setError(error);
      toogleIsLoaded(true);
    });
};

export { getServiceByCategoryId, getAllServices, getServiceByServiceName };
