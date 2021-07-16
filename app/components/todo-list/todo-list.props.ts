import { ViewStyle } from "react-native";
import { Todo } from "../../types";

export interface TodoListProps {
  /**
   * array of todo objects
   */
  todos: Array<Todo>;
  /**
   * Container style overrides
   */

  style?: ViewStyle;
}
