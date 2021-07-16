import { ViewStyle } from "react-native";

export interface TodoListProps {
  /**
   * array of todo objects
   */
  data: Array<any>;
  /**
   * Container style overrides
   */

  style?: ViewStyle;
}
