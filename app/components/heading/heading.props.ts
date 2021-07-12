import { StyleProp, ViewStyle } from "react-native";

export interface HeadingProps {
  /**
   * Text for heading
   */
  text: string;
  /**
   * Container style overrides
   */
  style?: StyleProp<ViewStyle>;
}
