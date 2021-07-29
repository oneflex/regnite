import React from "react";
import { View, ViewStyle } from "react-native";
import TodoList from "../../components/todo-list/todo-list";
import Heading from "../../components/heading/heading";
import NewTodoForm from "../../components/new-todo-form/new-todo-form";
import FiltersForm from "../../components/filters-form/filters-form";
import Screen from "../../components/screen/screen";

const CONTAINER: ViewStyle = { flex: 1 };

function HomeScreen() {
  return (
    <Screen>
      <View style={CONTAINER}>
        <Heading text="What's up, Joy!" />
        <FiltersForm />
        <NewTodoForm />
        <TodoList />
      </View>
    </Screen>
  );
}

export default HomeScreen;
