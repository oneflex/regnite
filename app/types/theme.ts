import { Palette } from "./palette";

export interface ThemeInterface {
  palette: Palette;
  /**
   * Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due
   * to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: string;
  /**
   * The screen background.
   */
  background: string;
  /**
   * The screen background.
   */
  secondaryBackground: string;
  /**
   * The main tinting color.
   */
  primary: string;
  /**
   * The secondary tinting color.
   */
  secondaryPrimary: string;
  /**
   * The default color of text in many components.
   */
  text: string;
  /**
   * Secondary information.
   */
  dim: string;
  /**
   * More secondary information.
   */
  dimmer: string;
  /**
   * Error messages and icons.
   */
  error: string;
  /**
   * Colors for categories
   */
  category: {
    work: string;
    personal: string;
    all: string;
  };
}
