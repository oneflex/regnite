/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import * as React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase, Docs } from "../../../storybook/views";
import { Toggle } from "react-powerplug";
import { Switch } from "./switch";

declare let module: any;

const styleArray: ViewStyle[] = [{ borderColor: "#686868" }];

const trackOffStyle: ViewStyle[] = [
  { backgroundColor: "#686868" },
  {
    height: 80,
    borderRadius: 0,
  },
];
const trackOnStyle: ViewStyle[] = [
  {
    backgroundColor: "#b1008e",
    borderColor: "#686868",
  },
  {
    height: 80,
    borderRadius: 0,
  },
];
const thumbOffStyle: ViewStyle[] = [
  {
    backgroundColor: "#b1008e",
    borderColor: "#686868",
  },
  {
    height: 80,
    borderRadius: 0,
  },
];
const thumbOnStyle: ViewStyle[] = [
  { backgroundColor: "#f0c" },
  {
    height: 80,
    borderRadius: 0,
    borderColor: "#686868",
  },
];

const description = `
  This is a clone of the iOS switch.

  You can use it to:

  1. Keep some boolean state
  2. Nice looking familiar knob
  3. More struff


  You can use \`<Switch />\` this way:

  \`\`\`
  <Switch
    disabled={props.isDisabled}
    value={props.isOn}
    onChange={() => props.setIsOn(isOn => !isOn)}
  />
  \`\`\`
`;

storiesOf("Switch", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs
      title="Switch"
      description={description}
      propsData={[
        ["color", "color for interactive switch `string`", "blue"],
        ["disabled", "boolean", "false"],
        ["onChange", "callback", "-"],
      ]}
    />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase
        title="The Toggle Switch"
        description="Use the switch to represent on/off states."
      >
        <Toggle initial={false}>
          {({ on, toggle }) => <Switch value={on} onToggle={toggle} />}
        </Toggle>
      </UseCase>
      <UseCase title="value = true" description="This is permanently on.">
        <Switch value={true} />
      </UseCase>
      <UseCase title="value = false" description="This is permanantly off.">
        <Switch value={false} />
      </UseCase>
    </Story>
  ))
  .add("Styling", () => (
    <Story>
      <UseCase
        title="Custom Styling"
        description="Promise me this won't happen."
      >
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <View>
              <Switch
                trackOnStyle={{
                  backgroundColor: "green",
                  borderColor: "black",
                }}
                trackOffStyle={{
                  backgroundColor: "red",
                  borderColor: "maroon",
                }}
                thumbOnStyle={{ backgroundColor: "cyan" }}
                thumbOffStyle={{ backgroundColor: "pink" }}
                value={on}
                onToggle={toggle}
              />
            </View>
          )}
        </Toggle>
      </UseCase>

      <UseCase title="Style array" description="This either.">
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <View>
              <Switch
                style={styleArray}
                trackOffStyle={trackOffStyle}
                trackOnStyle={trackOnStyle}
                thumbOffStyle={thumbOffStyle}
                thumbOnStyle={thumbOnStyle}
                // trackOnStyle={{ backgroundColor: "green", borderColor: "black" }}
                // trackOffStyle={{ backgroundColor: "red", borderColor: "maroon" }}
                // thumbOnStyle={{ backgroundColor: "cyan" }}
                // thumbOffStyle={{ backgroundColor: "pink" }}

                value={on}
                onToggle={toggle}
              />
            </View>
          )}
        </Toggle>
      </UseCase>
    </Story>
  ));
