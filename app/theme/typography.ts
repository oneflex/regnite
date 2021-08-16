import { Platform } from "react-native";

export const typography = {
  primary: { bold: "Merriweather-Bold", regular: "Merriweather-Regular" },
  secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),
  code: Platform.select({ ios: "Courier", android: "monospace" }),
};
