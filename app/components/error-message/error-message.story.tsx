import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  StoryScreen,
  Story,
  UseCase,
  Docs,
  PropsData,
} from "../../../storybook/views";
import ErrorMessage from "./error-message";

declare let module: any;

const description = `
  This component displays an error message.
`;

const propsData: PropsData = [
  ["children", "The error message `string`", "''"],
  ["style", "Container style overrides `ViewStyle`", "-"],
];

storiesOf("ErrorMessage", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs
      title="ErrorMessage"
      description={description}
      propsData={propsData}
    />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase title="ErrorMessage" description="Simple error message">
        <ErrorMessage>Some Error 3453453</ErrorMessage>
      </UseCase>
    </Story>
  ));
