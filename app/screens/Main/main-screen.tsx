import React from "react";
import { View, ViewStyle } from "react-native";
import { spacing } from "../../theme";
import TodoList from "../../components/todo-list/todo-list";
import Heading from "../../components/heading/heading";
import SubHeading from "../../components/sub-heading/sub-heading";
import { Todo } from "../../types";

const FULL: ViewStyle = { flex: 1 };

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[6],
};

const data: Array<Todo> = [
  {
    type: "personal",
    description: "GUY RONN",
    isCompleted: true,
    id: "122423234",
  },
  {
    type: "work",
    description: "YOSI BEZALHEL",
    isCompleted: true,
    id: "131",
  },
  {
    type: "personal",
    description: "Frank Schultz",
    isCompleted: false,
    id: "2363",
  },
  {
    type: "work",
    description: "Eunice French",
    isCompleted: false,
    id: "2333",
  },
  {
    type: "work",
    description: "Craig Newman",
    isCompleted: true,
    id: "2443",
  },
  {
    type: "personal",
    description: "Nettie Wolfe",
    isCompleted: true,
    id: "2263",
  },
  {
    type: "personal",
    description: "Julian Bennett",
    isCompleted: false,
    id: "277",
  },
];

export function MainScreen() {
  return (
    <View style={FULL}>
      <View style={CONTAINER}>
        <Heading text="What's up, Joy!" />
        <SubHeading text="TODAY'S TASKS" />
        <TodoList data={data} />
      </View>
    </View>
  );
}
