import { TextInputProps, ViewStyle } from "react-native";

export interface InputBoxProps extends TextInputProps {
  /**
   * label to be placed on top of the input
   */
  label?: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
