import { addTodo, removeTodo, updateTodo } from "./todos";
import { TodoData, Updates } from "./types";

describe("Todo action generators", () => {
  it("Generate add todo action", () => {
    const todo: TodoData = {
      type: "work",
      description: "YOSI BEZALHEL",
      isCompleted: true,
    };

    const action = addTodo(todo);
    expect(action).toEqual({
      type: "ADD_TODO",
      payload: {
        todo,
      },
    });
  });

  it("Generate remove todo action", () => {
    const id = "k23brk324kb23";
    const action = removeTodo(id);
    expect(action).toEqual({
      type: "REMOVE_TODO",
      payload: {
        id,
      },
    });
  });

  it("Generate update todo action", () => {
    const id = "blablabla";
    const updates: Updates = {
      description: "lili",
      isCompleted: true,
    };
    const action = updateTodo(id, updates);
    expect(action).toEqual({
      type: "UPDATE_TODO",
      payload: {
        id,
        updates,
      },
    });
  });
});
