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

const rateForService = (rate, userId, serviceId) => {
  fetch(`${BACKEND_URL}/ratings?userid=${userId}&serviceId=${serviceId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length && data.length !== 0) {
        fetch(`${BACKEND_URL}/ratings/${data[0].id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userid: userId,
            serviceId: serviceId,
            rate: rate,
            timestamp: Date.now(),
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Rate changed:", data);
          });
      } else {
        fetch(`${BACKEND_URL}/ratings`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userid: userId,
            serviceId: serviceId,
            rate: rate,
            timestamp: Date.now(),
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Rate added:", data);
          });
      }
    });
};

export {
  getServiceByCategoryId,
  getAllServices,
  getServiceByServiceName,
  rateForService,
};
