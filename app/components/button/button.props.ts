import { ViewStyle, ButtonProps as RNButtonProps } from "react-native";

export interface ButtonProps extends RNButtonProps {
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
