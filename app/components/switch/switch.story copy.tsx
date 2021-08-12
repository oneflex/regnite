/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase, Docs } from "../../../storybook/views";
import { <%= props.pascalCaseName %> } from "./<%= props.kebabCaseName %>";

declare let module: any;

const description = `
  This is a <%= props.camelCaseName %> component.
`;

storiesOf("<%= props.pascalCaseName %>", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs
      title="<%= props.pascalCaseName %>"
      description={description}
      propsData={[["name", "description `type`", "default value"]]}
    />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase title="<%= props.pascalCaseName %> title" description="<%= props.pascalCaseName %> description">
        <<%= props.pascalCaseName %> />
      </UseCase>
    </Story>
  ));
