import { TodoData, Updates } from "../actions/todos/types";
import { Todo } from "../types";
import { database } from "./firebase";

async function create(uid: string, todo: TodoData) {
  const ref = await database.ref(`users/${uid}/todos`).push(todo);
  return ref.key;
}

async function read(uid: string) {
  const snapshot = await database.ref(`users/${uid}/todos`).once("value");
  const todos: Array<Todo> = [];

  snapshot.forEach(childSnapshot => {
    todos.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });

  return todos;
}

function update(uid: string, id: string, updates: Updates) {
  return database.ref(`users/${uid}/todos/${id}`).update(updates);
}

function remove(uid: string, id: string) {
  return database.ref(`users/${uid}/todos/${id}`).remove();
}

export { create, read, update, remove };
