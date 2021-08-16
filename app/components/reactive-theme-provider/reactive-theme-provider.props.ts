import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { ThemeInterface } from "../../types/theme";

export interface ReactiveThemeProviderProps {
  /**
   * The entire application
   */
  children: ReactNode;
  /**
   * The light theme interface
   */
  lightTheme: ThemeInterface;
  /**
   * The dark theme interface
   */
  darkTheme: ThemeInterface;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
