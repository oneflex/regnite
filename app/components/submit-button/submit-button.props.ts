import { ViewStyle } from "react-native";

export interface SubmitButtonProps {
  /**
   * Handle click of the button
   */
  handleClick: () => void;
  /**
   * Is the button disabled
   */
  disabled: boolean;
  /**
   * Color for the text
   */
  color: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
