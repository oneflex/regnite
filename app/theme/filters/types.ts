export interface Action {
  type: "UPDATE_FILTER_BY" | "UPDATE_SORT_BY";
  payload?: any;
}
