import { ViewStyle } from "react-native";
import { TodoData } from "../../actions/todos/types";

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
