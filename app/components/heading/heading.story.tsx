import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  StoryScreen,
  Story,
  UseCase,
  Docs,
  PropsData,
} from "../../../storybook/views";
import Heading from "./heading";

declare let module: any;

const description = `
  This is a heading component that allows scaling.
  The heading scales from 1 to 3, to match the HTML tags ${`h1`}, ${`h2`}, ${`h3`}.
`;

const propsData: PropsData = [
  ["children", "The heading text `string`", "-"],
  ["scale", "The heading scale `1 | 2 | 3`", "1"],
  ["style", "Container style overrides `ViewStyle`", "-"],
];

storiesOf("Heading", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs title="Heading" description={description} propsData={propsData} />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase
        noPad
        title="Heading"
        description="Different scaling of the heading"
      >
        <Heading>Heading Scale 1</Heading>
        <Heading scale={2}>Heading Scale 2</Heading>
        <Heading scale={3}>Heading Scale 3</Heading>
      </UseCase>
    </Story>
  ));
