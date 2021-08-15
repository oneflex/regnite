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
import { theme } from "@storybook/react-native/dist/preview/components/Shared/theme";
import { primary } from "../../theme";

declare let module: any;

const description = `
  This is a button component that allows diffrent kinds of buttons.
  The button kinds are \`Primary\`, \`Secondary\`, \`Tertiary\`.
`;

const propsData: PropsData = [
  ["kind", "The button kind `Primary | Secondary | Tertiary`", "Primary"],
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
        <Button onPress={() => {}} kind="primary">
          Primary
        </Button>
      </UseCase>
      <UseCase title="Secondary title">
        <Button onPress={() => {}} kind="secondary">
          Secondary
        </Button>
      </UseCase>
      <UseCase title="Tertiary title">
        <Button onPress={() => {}} kind="tertiary">
          Tertiary
        </Button>
      </UseCase>
      <UseCase title="Disabled primary button">
        <Button disabled onPress={() => {}} kind="primary">
          I am diabled
        </Button>
      </UseCase>
      <UseCase title="Disabled secondary button">
        <Button disabled onPress={() => {}} kind="secondary">
          I am also diabled
        </Button>
      </UseCase>
      <UseCase title="Disabled tertiary button">
        <Button disabled onPress={() => {}} kind="tertiary">
          I am also diabled
        </Button>
      </UseCase>
    </Story>
  ));
