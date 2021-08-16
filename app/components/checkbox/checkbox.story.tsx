import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  StoryScreen,
  Story,
  UseCase,
  Docs,
  PropsData,
} from "../../../storybook/views";
import Checkbox from "./checkbox";
import { Toggle } from "react-powerplug";

declare let module: any;

const description = `
  A simple checkbox icon.
`;

const propsData: PropsData = [
  [
    "size",
    "The height and width of the checkbox (height == width) `number`",
    "-",
  ],
  ["isChecked", "Is the checkbox checked `boolean`", "-"],
  ["color", "Color for the unchecked checkbox `string`", "-"],
  [
    "handlePress",
    "A callback function to run when checkbox is pressed `() => void`",
    "-",
  ],
  ["style", "Container style overrides `ViewStyle`", "-"],
];

storiesOf("Checkbox", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs title="Checkbox" description={description} propsData={propsData} />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase title="Checkbox with size=30">
        <Toggle initial={true}>
          {({ on, toggle }) => (
            <Checkbox
              size={30}
              isChecked={on}
              color="black"
              handlePress={toggle}
            />
          )}
        </Toggle>
      </UseCase>
      <UseCase title="Checkbox with size=100">
        <Toggle initial={true}>
          {({ on, toggle }) => (
            <Checkbox
              size={100}
              isChecked={on}
              color="black"
              handlePress={toggle}
            />
          )}
        </Toggle>
      </UseCase>
    </Story>
  ));
