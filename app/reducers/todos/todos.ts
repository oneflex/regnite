const todosReducerDefaultState = [];

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload.todo];
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
