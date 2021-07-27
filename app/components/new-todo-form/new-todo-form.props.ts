import { ViewStyle } from "react-native";
import { TodoData } from "../../actions/todos/types";
import { Category, Sort } from "../../types/filters";

export interface NewTodoFormProps {
  /**
   * adds todo
   */
  addTodo: (todo: TodoData) => void;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
