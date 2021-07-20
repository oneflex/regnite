import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
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
    applyMiddleware(ReduxThunk),
  );

  return store;
};
