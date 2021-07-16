import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todos/todos";

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
