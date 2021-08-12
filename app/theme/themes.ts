import { ThemeInterface } from "../types/theme";
import { palette } from "./palette";

export const lightTheme: ThemeInterface = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: {
    100: palette.neutral[100],
    200: palette.neutral[200],
    300: palette.neutral[300],
  },
  text: {
    100: palette.text[100],
    200: palette.text[200],
    300: palette.text[300],
  },
  primary: palette.primary,
  error: palette.red,
  category: {
    work: palette.primary[100],
    personal: palette.primary[400],
    all: palette.text[100],
  },
};

export const darkTheme: ThemeInterface = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: {
    100: palette.neutral[400],
    200: palette.neutral[500],
    300: palette.neutral[600],
  },
  text: {
    100: palette.text[400],
    200: palette.text[500],
    300: palette.text[600],
  },
  primary: palette.primary,
  error: palette.red,
  category: {
    work: palette.primary[100],
    personal: palette.primary[400],
    all: palette.text[100],
  },
};
