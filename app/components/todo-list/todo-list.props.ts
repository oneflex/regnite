import { StyleProp, ViewStyle } from "react-native";

export interface TodoListProps {
  /**
   * array of todo objects
   */
  data: Array<any>;
  /**
   * Container style overrides
   */

  style?: StyleProp<ViewStyle>;
}
