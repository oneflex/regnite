import { Todo } from "../../types";
import { Action } from "../../actions/todos/types";
import { v4 as uuid } from "uuid";

const todosReducerDefaultState: Readonly<Todo[]> = [];

export default (state = todosReducerDefaultState, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: uuid(), ...action.payload.todo }];
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
