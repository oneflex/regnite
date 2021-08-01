import { ViewStyle, TextStyle } from "react-native";

export function condStyle(cond: boolean, style: ViewStyle | TextStyle) {
  return cond ? style : {};
}
