import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todos/todos";

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
    }),
  );

  return store;
};
