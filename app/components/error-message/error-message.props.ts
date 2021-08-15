import { ViewStyle } from "react-native";

export interface ErrorMessageProps {
  /**
   * The error message
   */
  children: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
