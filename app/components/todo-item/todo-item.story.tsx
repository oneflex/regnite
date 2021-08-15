import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  StoryScreen,
  Story,
  UseCase,
  Docs,
  PropsData,
} from "../../../storybook/views";
import { TodoItem } from "./todo-item";
import { Toggle } from "react-powerplug";

declare let module: any;

const description = `
  Displays a todo item, with option to toggle completion and to delete the item.
`;

const propsData: PropsData = [
  [
    "handleClickCheckbox",
    "Toggle the isCompleted property of the todo with the id provided `(id: string, isCompleted: boolean) => void`",
    "-",
  ],
  ["handleClickRemove", "remove an item `(id: string) => void`", "-"],
  ["type", "The type of the todo `'personal' | 'work'`", "-"],
  ["description", "The todo description `string`", "-"],
  ["isCompleted", "Is the todo completed `boolean`", "-"],
  ["id", "The id of the todo `string`", "-"],
  ["style", "Container style overrides `ViewStyle`", "-"],
];

storiesOf("TodoItem", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs title="TodoItem" description={description} propsData={propsData} />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase noPad title="TodoItem" description="List of todos">
        {["Pay rent", "Learn React", "Buy high sell low"].map(todo => (
          <Toggle initial={false} key={todo}>
            {({ on, toggle }) => (
              <TodoItem
                handleClickCheckbox={toggle}
                handleClickRemove={() => ({})}
                type="work"
                isCompleted={on}
                description={todo}
                id="id"
              />
            )}
          </Toggle>
        ))}
      </UseCase>
      <UseCase
        noPad
        title="TodoItem types"
        description="TodoItem with work type and personal type"
      >
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <TodoItem
              handleClickCheckbox={toggle}
              handleClickRemove={() => ({})}
              type="work"
              isCompleted={on}
              description="Work type"
              id="id"
            />
          )}
        </Toggle>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <TodoItem
              handleClickCheckbox={toggle}
              handleClickRemove={() => ({})}
              type="personal"
              isCompleted={on}
              description="Personal type"
              id="id"
            />
          )}
        </Toggle>
      </UseCase>
    </Story>
  ));
