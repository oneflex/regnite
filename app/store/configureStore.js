import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import todosReducer from "../reducers/todos/todos";
import filtersReducer from "../reducers/filters/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(ReduxThunk)),
  );

  return store;
};
