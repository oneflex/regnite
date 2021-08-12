import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase, Docs } from "../../../storybook/views";
import MyChair from "./my-chair";

declare let module: any;

const description = `
  This is a myChair component.
`;

storiesOf("MyChair", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs
      title="MyChair"
      description={description}
      propsData={[["name", "description `type`", "default value"]]}
    />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase title="MyChair title" description="MyChair description">
        <MyChair />
      </UseCase>
    </Story>
  ));
