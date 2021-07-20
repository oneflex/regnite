import { palette } from "./palette";

export const color = {
  palette,
  /**
   * Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due
   * to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.blueWhite,
  /**
   * The screen background.
   */
  secondaryBackground: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.lightBlue,
  /**
   * The secondary tinting color.
   */
  secondaryPrimary: palette.pink,
  /**
   * The default color of text in many components.
   */
  text: palette.darkBlue,
  /**
   * Secondary information.
   */
  dim: palette.grey,
  /**
   * More secondary information.
   */
  dimmer: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,
  /**
   * Colors for categories
   */
  category: {
    work: palette.pink,
    personal: palette.lightBlue,
    all: palette.grey,
  },
};
