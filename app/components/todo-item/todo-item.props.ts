import { ViewStyle } from "react-native";

export interface TodoProps {
  /**
   * The type of thr todo
   */
  type: "personal" | "work";
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
