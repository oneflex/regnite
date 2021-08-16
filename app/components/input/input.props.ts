import { TextInputProps, ViewStyle } from "react-native";

export interface InputProps extends TextInputProps {
  /**
   * is input valid
   */
  error?: boolean;
  /**
   * error message to display when error is set to true
   */
  errorMessage?: string;
  /**
   * label to be placed on top of the input
   */
  label?: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
