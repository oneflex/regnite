import { Platform } from "react-native";

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: {
    bold: "Merriweather-Bold",
    regular: "Merriweather-Regular",
  },
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: "Courier", android: "monospace" }),
};
