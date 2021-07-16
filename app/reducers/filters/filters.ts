import { filters } from "../../types";
import { action } from "../../actions/filters/types";

const filtersReducerDefaultState: Readonly<filters[]> = [];

export default (state = filtersReducerDefaultState, action : Action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      
    default:
      return state;
  }
};