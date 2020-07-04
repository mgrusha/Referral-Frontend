import { atom } from "recoil";

export const servicesToDisplay = atom({
  key: "servicesToDisplay",
  default: [],
});

export const starRate = atom({
  key: "starRate",
  default: 0,
});

export const nameFilter = atom({
  key: "nameFilter",
  default: "",
});

export const sort = atom({
  key: "sort",
  default: { order: "none", howToSort: (a, b) => {} },
});
