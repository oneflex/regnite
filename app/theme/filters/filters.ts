import { Category, Sort } from "../../types/filters";

export const updateFilterBy = (type: Category) => ({
  type: "UPDATE_FILTER_BY",
  payload: {
    type,
  },
});

export const updateSortBy = (type: Sort) => ({
  type: "UPDATE_SORT_BY",
  payload: {
    type,
  },
});
