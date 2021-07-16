import todosReducer from "./todos";
import * as actions from "../../actions/todos/todos";
import { todos } from "../../test/fixtures";
import { TodoData, Updates } from "../../actions/todos/types";

describe("Todo reducer", () => {
  it("Add new todo", () => {
    const todo: TodoData = {
      type: "work",
      description: "YOSI BEZALHEL",
      isCompleted: true,
    };
    const updatedTodos = todosReducer(todos, actions.addTodo(todo));
    expect(updatedTodos).toEqual([
      ...todos,
      {
        ...todo,
        id: expect.any(String),
      },
    ]);
  });

  it("Removes a todo", () => {
    const testId = todos[3].id;
    const updatedTodos = todosReducer(todos, actions.removeTodo(testId));
    expect(updatedTodos).toEqual(todos.filter(todo => todo.id !== testId));
  });

  it("Update a todo", () => {
    const testId = todos[3].id;
    const testUpdates: Updates = {
      description: "lalalaa",
    };
    const updatedTodos = todosReducer(
      todos,
      actions.updateTodo(testId, testUpdates),
    );
    expect(updatedTodos).toEqual([
      ...todos.slice(0, 3),
      { ...todos[3], ...testUpdates },
      ...todos.slice(4),
    ]);
  });
});
