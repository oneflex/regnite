import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import todosReducer from "../reducers/todos/todos";
import filtersReducer from "../reducers/filters/filters";
import authReducer from "../reducers/auth/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      filters: filtersReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(ReduxThunk /* logger */)),
  );

  return store;
};
