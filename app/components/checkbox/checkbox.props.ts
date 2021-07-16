import { ViewStyle } from "react-native";

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
   * Color for the unchecked checkbox
   */
  color: string;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
