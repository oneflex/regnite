import { ViewStyle } from "react-native";

export interface ScreenProps {
  /**
   * should render a header
   */
  showHeader?: boolean;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
