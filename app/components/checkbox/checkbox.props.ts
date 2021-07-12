import { StyleProp, ViewStyle } from "react-native";

export interface CheckboxProps {
  /**
   * The height and width of the checkbox (height == width)
   */
  size: number;
  /**
   * Is the checkbox checked
   */
  isChecked: boolean;
  /**
   * Container style overrides
   */
  style?: StyleProp<ViewStyle>;
}
