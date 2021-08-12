import React, { useEffect } from "react";
import { getStorybookUI, configure } from "@storybook/react-native";

declare let module;

configure(() => {
  require("./storybook-registry");
}, module);

const StorybookUI = getStorybookUI({
  port: 9001,
  host: "localhost",
  onDeviceUI: true,
  asyncStorage:
    require("@react-native-async-storage/async-storage").default || null,
});

export function StorybookUIRoot() {
  // useEffect(() => {
  //   (async () => {
  //     await initFonts(); // expo only
  //   })();
  // }, []);

  return <StorybookUI />;
}
