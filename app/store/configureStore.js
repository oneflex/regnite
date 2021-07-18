import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todos/todos";
import filtersReducer from "../reducers/filters/filters";

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
