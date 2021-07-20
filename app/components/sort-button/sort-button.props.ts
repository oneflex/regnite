import { ViewStyle } from "react-native";

export interface SortButtonProps {
  /**
   * sort name
   */
  text: string;
  /**
   * Handle click of the button
   */
  handleClick: () => void;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
