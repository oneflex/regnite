import { TodoData, Updates } from "../actions/todos/types";
import { Todo } from "../types";
import database from "./firebase";

async function create(todo: TodoData) {
  const ref = await database.ref(`todos`).push(todo);
  return ref.key;
}

async function read() {
  const snapshot = await database.ref(`todos`).once("value");
  const todos: Array<Todo> = [];

  snapshot.forEach(childSnapshot => {
    todos.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });

  return todos;
}

function update(id: string, updates: Updates) {
  return database.ref(`todos/${id}`).update(updates);
}

function remove(id: string) {
  return database.ref(`todos/${id}`).remove();
}

export { create, read, update, remove };
