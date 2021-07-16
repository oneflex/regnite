import { ViewStyle } from "react-native";

export interface TodoProps {
  /**
   * Toggle the isCompleted property of the todo with the id provided
   */
  handleClickCheckbox: (id: string, isCompleted: boolean) => void;
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
   * The id of the todo
   */
  id: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
