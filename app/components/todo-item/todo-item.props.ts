import { ViewStyle } from "react-native";

export interface TodoProps {
  /**
   * The todo description
   */
  description: string;
  /**
   * Is the todo completed
   */
  isCompleted: boolean;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
