import * as React from "react";
import { TodoListProps } from "./todo-list.props";
import { View, ViewStyle, FlatList } from "react-native";
import Todo from "../todo/todo";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  flex: 1,
};

function TodoList(props: TodoListProps) {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <FlatList
        data={props.data}
        renderItem={({ item }): any => <Todo {...item} />}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
}

export default TodoList;
