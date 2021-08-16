import { ViewStyle } from "react-native";
import { Category } from "../../types/filters";

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
   * The category type
   */
  category: Category;
  /**
   * text
   */
  text: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
