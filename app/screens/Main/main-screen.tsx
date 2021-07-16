import React from "react";
import { View, ViewStyle } from "react-native";
import { spacing } from "../../theme";
import TodoList from "../../components/todo-list/todo-list";
import Heading from "../../components/heading/heading";
import SubHeading from "../../components/sub-heading/sub-heading";
import NewTodoForm from "../../components/new-todo-form/new-todo-form";

const FULL: ViewStyle = { flex: 1 };

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[6],
};

export function MainScreen() {
  return (
    <View style={FULL}>
      <View style={CONTAINER}>
        <Heading text="What's up, Joy!" />
        <NewTodoForm />
        <SubHeading text="TODAY'S TASKS" />
        <TodoList />
      </View>
    </View>
  );
}
