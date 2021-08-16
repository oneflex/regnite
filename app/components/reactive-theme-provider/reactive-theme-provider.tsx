import * as React from "react";
import { ReactiveThemeProviderProps } from "./reactive-theme-provider.props";
import { ThemeProvider } from "@emotion/react";
import { useReactiveTheme } from "../../hooks";
import { ThemeInterface } from "../../types/theme";

const ReactiveThemeProvider: React.FC<ReactiveThemeProviderProps> = ({
  lightTheme,
  darkTheme,
  children,
}) => {
  const theme = useReactiveTheme<ThemeInterface>(lightTheme, darkTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ReactiveThemeProvider;
