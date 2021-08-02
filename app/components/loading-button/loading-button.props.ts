import { ViewStyle } from "react-native";
import { ButtonProps } from "../button/button.props";

export interface LoadingButtonProps extends ButtonProps {
  /**
   * is button in loading state
   */
  isLoading: boolean;
  /**
   * error message or undefined if no error exist
   */
  error: string | null;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
