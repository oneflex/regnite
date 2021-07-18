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
   * A callback function to run when checkbox is pressed
   */
  handlePress: () => void;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
