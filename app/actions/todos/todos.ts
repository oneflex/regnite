import { Todo } from "../../types";
import { Updates } from "./types";

export const addTodo = (todo: Todo) => ({
  type: "ADD_TODO",
  payload: { todo },
});

export const removeTodo = (id: number) => ({
  type: "REMOVE_TODO",
  payload: { id },
});

export const updateTodo = (id: string, updates: Updates) => ({
  type: "UPDATE_TODO",
  payload: {
    id,
    updates,
  },
});
