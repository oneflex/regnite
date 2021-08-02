import { Updates, TodoData, Action } from "./types";
import { Todo } from "../../types";
import API from "../../firebase/API";

const setTodos = (todos: Array<Todo>): Action => ({
  type: "SET_TODOS",
  payload: { todos },
});

export const startSetTodos = () => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth.user;
    const todos = await API.todos.read(uid);
    dispatch(setTodos(todos));
  };
};

const addTodo = (todo: Todo): Action => ({
  type: "ADD_TODO",
  payload: { todo },
});

export const startAddTodo = (todoData: TodoData) => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth.user;
    const id = await API.todos.create(uid, todoData);
    dispatch(addTodo({ id, ...todoData }));
  };
};

export const removeTodo = (id: string): Action => ({
  type: "REMOVE_TODO",
  payload: { id },
});

export const startRemoveTodo = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth.user;
    dispatch(removeTodo(id));
    await API.todos.remove(uid, id);
  };
};

export const updateTodo = (id: string, updates: Updates): Action => ({
  type: "UPDATE_TODO",
  payload: {
    id,
    updates,
  },
});

export const startUpdateTodo = (id: string, updates: Updates) => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth.user;
    dispatch(updateTodo(id, updates));
    await API.todos.update(uid, id, updates);
  };
};
