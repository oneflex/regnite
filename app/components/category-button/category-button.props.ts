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
  /**NP
   * Color for the text
   */
  color: string;
  /**NP
   * text
   */
  text: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
