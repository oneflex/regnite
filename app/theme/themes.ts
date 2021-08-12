import { ThemeInterface } from "../types/theme";
import { palette } from "./palette";

export const lightTheme: ThemeInterface = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: palette.blueWhite,
  secondaryBackground: palette.white,
  primary: palette.lightBlue,
  secondaryPrimary: palette.pink,
  text: palette.darkBlue,
  dim: palette.grey,
  dimmer: palette.lightGrey,
  error: palette.angry,
  category: {
    work: palette.pink,
    personal: palette.lightBlue,
    all: palette.grey,
  },
};

export const darkTheme: ThemeInterface = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: palette.darkBlue,
  secondaryBackground: palette.black,
  primary: palette.lightBlue,
  secondaryPrimary: palette.pink,
  text: palette.blueWhite,
  dim: palette.grey,
  dimmer: palette.lightGrey,
  error: palette.angry,
  category: {
    work: palette.pink,
    personal: palette.lightBlue,
    all: palette.grey,
  },
};
