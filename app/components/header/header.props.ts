import { ViewStyle } from "react-native";

export interface HeaderProps {
  /**
   * handle click of the back button
   */
  handleBackButtonClick: () => void;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
