import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  StoryScreen,
  Story,
  UseCase,
  Docs,
  PropsData,
} from "../../../storybook/views";
import Input from "./input";

declare let module: any;

const description = `
  This is a wrapper around React Native \`TextInput\` component. It can display a label if given one, and an error message below the input if the error argument is set to true.

  \`Input\` inherits the \`TextInput\` props.
`;

const propsData: PropsData = [
  ["error", "Should an error message be displayed `boolean`", "false"],
  [
    "errorMessage",
    "error message to display when error is set to true `string`",
    "''",
  ],
  ["label", "label to be placed on top of the input `string`", "''"],
  ["style", "Container style overrides `ViewStyle`", "-"],
];

storiesOf("Input", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs title="Input" description={description} propsData={propsData} />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase title="Input" description="Regular input component">
        <Input placeholder="No label" />
      </UseCase>

      <UseCase
        title="Input with label"
        description="Label can be optionally added to the input component"
      >
        <Input label="Email" placeholder="Enter Email" />
      </UseCase>

      <UseCase
        title="Input with error"
        description="If the error argument is set to true, the errorMessage argument will be displayed"
      >
        <Input
          label="Password"
          placeholder="Enter Password"
          error
          errorMessage="Password must contain lower and upper case letters, a number and speical character"
        />
      </UseCase>
    </Story>
  ));
