import { ViewStyle } from "react-native";

export interface HeadingProps {
  /**
   * scaling of the header (1 is largest)
   * defaults to 1
   */
  scale?: 1 | 2 | 3;
  /**
   * Text for heading
   */
  children: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
