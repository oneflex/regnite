import { Todo, Filters } from "../types";

export function filterTodos(todos: Todo[], filters: Filters) {
  const { filterBy, sortBy } = filters;

  const sortedTodos = [...todos].sort((todoOne: Todo, todoTwo: Todo) => {
    if (todoOne.description < todoTwo.description) {
      return sortBy === "nameAsc" ? -1 : 1;
    } else if (todoOne.description > todoTwo.description) {
      return sortBy === "nameAsc" ? 1 : -1;
    } else {
      return 0;
    }
  });

  const filteredTodos =
    filterBy === "all"
      ? sortedTodos
      : sortedTodos.filter((todo: Todo) => todo.type === filterBy);

  return filteredTodos;
}
