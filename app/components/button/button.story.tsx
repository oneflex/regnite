import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  StoryScreen,
  Story,
  UseCase,
  Docs,
  PropsData,
} from "../../../storybook/views";
import Button from "./button";

declare let module: any;

const description = `
  This is a button component that allows diffrent kinds of buttons.
  The button kinds are \`primary\`, \`secondary\`, \`tertiary\`.
`;

const propsData: PropsData = [
  ["kind", "The button kind `primary | secondary | tertiary`", "primary"],
  ["fontSize", "the button text font size `number`", "14"],
  ["style", "Container style overrides `ViewStyle`", "-"],
];

storiesOf("Button", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs title="Button" description={description} propsData={propsData} />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase title="Primary title">
        <Button kind="primary">Primary</Button>
      </UseCase>
      <UseCase title="Secondary title">
        <Button kind="secondary">Secondary</Button>
      </UseCase>
      <UseCase title="Tertiary title">
        <Button kind="tertiary">Tertiary</Button>
      </UseCase>
      <UseCase title="Disabled primary button">
        <Button disabled kind="primary">
          I am disabled
        </Button>
      </UseCase>
      <UseCase title="Disabled secondary button">
        <Button disabled kind="secondary">
          I am also disabled
        </Button>
      </UseCase>
      <UseCase title="Disabled tertiary button">
        <Button disabled kind="tertiary">
          I am also disabled
        </Button>
      </UseCase>
    </Story>
  ));
