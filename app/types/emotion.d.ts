import "@emotion/react";
import { ThemeInterface } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeInterface {}
}
