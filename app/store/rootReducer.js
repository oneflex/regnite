import todosReducer from "../reducers/todos/todos";
import filtersReducer from "../reducers/filters/filters";
import authReducer from "../reducers/auth/auth";
import { combineReducers } from "redux";

export default combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
  auth: authReducer,
});
