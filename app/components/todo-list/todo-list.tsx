import * as React from "react";
import { TodoListProps } from "./todo-list.props";
import { View, ViewStyle, FlatList } from "react-native";
import TodoItem from "../todo-item/todo-item";
import { Todo } from "../../types";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
};

const TodoList: React.FC<TodoListProps> = props => {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <FlatList
        data={props.data}
        renderItem={({ item }): any => <TodoItem {...item} />}
        keyExtractor={(todo: Todo): string => todo.id}
      />
    </View>
  );
};

export default TodoList;
