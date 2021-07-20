import { ViewStyle } from "react-native";

export interface CategoryButtonProps {
  /**
   * Handle click of the button
   */
  handleClick: () => void;
  /**
   * numbers of todos by category
   */
  todosNumber: number;
  /**
   * numbers of todos that are completed by category
   */
  todosCompleted: number;
  /**
   * Color for the text
   */
  color: string;
  /**
   * text
   */
  text: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
