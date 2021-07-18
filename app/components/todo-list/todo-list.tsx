import * as React from "react";
import { connect } from "react-redux";
import { TodoListProps } from "./todo-list.props";
import { View, ViewStyle, FlatList } from "react-native";
import TodoItem from "../todo-item/todo-item";
import { Todo } from "../../types";
import { filterTodos } from "../../selectors/todos";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
};

const TodoList: React.FC<TodoListProps> = props => {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <FlatList
        data={props.todos}
        renderItem={({ item }): any => <TodoItem {...item} />}
        keyExtractor={(todo: Todo): string => todo.id}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  todos: filterTodos(state.todos, state.filters),
});

export default connect(mapStateToProps)(TodoList);
