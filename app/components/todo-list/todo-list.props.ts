import { ViewStyle } from "react-native";
import { Todo } from "../../types";

export interface TodoListProps {
  /**
   * fetches and set the todos
   */
  setTodos: () => Promise<any>;
  /**
   * array of todo objects
   */
  todos: Array<Todo>;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
