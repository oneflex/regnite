import { ViewStyle, TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Container style overrides
   */
  style?: ViewStyle;
  /**
   * kinds of button
   */
  kind?: "primary" | "secondary" | "tertiary";
}
