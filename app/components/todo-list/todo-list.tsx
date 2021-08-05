import * as React from "react";
import { connect } from "react-redux";
import { TodoListProps } from "./todo-list.props";
import { View, ViewStyle, FlatList, ActivityIndicator } from "react-native";
import SubHeading from "../../components/sub-heading/sub-heading";
import TodoItem from "../todo-item/todo-item";
import { Todo } from "../../types";
import { filterTodos } from "../../selectors/todos";
import { startSetTodos } from "../../actions/todos/todos";
import { spacing } from "../../theme";
import { translate } from "../../i18n";

const CONTAINER: ViewStyle = { flex: 1 };

const HEADING: ViewStyle = {
  paddingHorizontal: spacing[5],
};

const TODOS_CONTAINER: ViewStyle = {
  paddingBottom: spacing[5],
};

const TODOS: ViewStyle = {
  flex: 1,
};

const TodoList: React.FC<TodoListProps> = props => {
  const { style } = props;

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    props.setTodos().then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <ActivityIndicator />;

  return (
    <View style={[CONTAINER, style]}>
      <SubHeading
        text={translate("homeScreen.subtitle.todayTasks")}
        style={HEADING}
      />
      <FlatList
        data={props.todos}
        renderItem={({ item }): any => <TodoItem {...item} />}
        keyExtractor={(todo: Todo): string => todo.id}
        style={TODOS}
        contentContainerStyle={TODOS_CONTAINER}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setTodos: () => dispatch(startSetTodos()),
});

const mapStateToProps = (state: any) => ({
  todos: filterTodos(state.todos, state.filters),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
