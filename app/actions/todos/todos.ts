export const createTodo = todo => ({
  type: "CREATE_TODO",
  payload: { todo },
});

export const getTodos = () => ({
  type: "GET_TODO",
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  payload: { id },
});

export const updateTodo = (id, updates) => ({
  type: "UPDATE_TODO",
  payload: {
    id,
    updates,
  },
});
