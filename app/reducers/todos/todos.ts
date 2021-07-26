import { Todo } from "../../types";
import { Action } from "../../actions/todos/types";

const todosReducerDefaultState: Readonly<Todo[]> = [];

export default (state = todosReducerDefaultState, action: Action) => {
  switch (action.type) {
    case "SET_TODOS":
      return [...action.payload.todos];
    case "ADD_TODO":
      return [...state, { ...action.payload.todo }];
    case "REMOVE_TODO":
      return state.filter(({ id }) => id !== action.payload.id);
    case "UPDATE_TODO": {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, action.payload.updates);
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
