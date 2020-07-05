import { selector } from "recoil";
import { servicesToDisplay, nameFilter, starRate, sort } from "./atoms";

export const getAllServices = selector({
  key: "getAllServices",
  get: ({ get }) => {
    return get(servicesToDisplay);
  },
});

export const getFilteredServices = selector({
  key: "getFilteredServices",
  get: ({ get }) => {
    const services = get(servicesToDisplay);
    const name = get(nameFilter);
    const rate = get(starRate);
    const { howToSort } = get(sort);
    return services
      .filter(
        (service) =>
          //TODO Calcluate rating in ugly way
          service.name.toLowerCase().includes(name) &&
          service.ratings.reduce((sum, elem) => (sum += elem.rating), 0) /
            service.ratings.length >=
            rate
      )
      .sort(howToSort);
  },
});
