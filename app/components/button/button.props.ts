import { ViewStyle, TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * kinds of button, defaults to "primary"
   */
  kind?: "primary" | "secondary" | "tertiary";
  /**
   * the button text font size, defaults to 14s
   */
  fontSize?: number;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
