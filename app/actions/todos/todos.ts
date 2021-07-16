import { Updates, TodoData, Action } from "./types";

export const addTodo = (todo: TodoData): Action => ({
  type: "ADD_TODO",
  payload: { todo },
});

export const removeTodo = (id: string): Action => ({
  type: "REMOVE_TODO",
  payload: { id },
});

export const updateTodo = (id: string, updates: Updates): Action => ({
  type: "UPDATE_TODO",
  payload: {
    id,
    updates,
  },
});
