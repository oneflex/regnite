import { Filters } from "../../types";
import { Action } from "../../actions/filters/types";

const filtersReducerDefaultState: Readonly<Filters> = {
  filterBy: "all",
  sortBy: "nameAsc",
};

export default (state = filtersReducerDefaultState, action: Action) => {
  switch (action.type) {
    case "UPDATE_FILTER_BY":
      return { ...state, filterBy: action.payload.type };
    case "UPDATE_SORT_BY":
      return { ...state, sortBy: action.payload.type };
    default:
      return state;
  }
};
