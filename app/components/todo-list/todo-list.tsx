import * as React from "react";
import { connect } from "react-redux";
import { TodoListProps } from "./todo-list.props";
import { ViewStyle, ActivityIndicator } from "react-native";
import styled from "@emotion/native";
import { Todo } from "../../types";
import { filterTodos } from "../../selectors/todos";
import { startSetTodos } from "../../actions/todos/todos";
import { spacing } from "../../theme";
import { translate } from "../../i18n";
import Heading from "../heading/heading";
import TodoItem from "../todo-item/todo-item";

const Container = styled.View(() => ({
  flex: 1,
  marginTop: spacing[3],
}));

const SubHeading = styled(Heading)(() => ({
  paddingHorizontal: spacing[5],
  marginBottom: spacing[3],
}));

const Todos = styled.FlatList(() => ({
  flex: 1,
}));

const TODOS_CONTAINER: ViewStyle = {
  paddingBottom: spacing[5],
};

export const TodoList: React.FC<TodoListProps> = props => {
  const { style } = props;

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    props.setTodos().then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <ActivityIndicator />;

  return (
    <Container style={style}>
      <SubHeading scale={3}>
        {translate("homeScreen.subtitle.todayTasks")}
      </SubHeading>
      <Todos
        data={props.todos}
        renderItem={(todo: any) => <TodoItem {...todo.item} />}
        keyExtractor={(todo: Todo): string => todo.id}
        contentContainerStyle={TODOS_CONTAINER}
      />
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setTodos: () => dispatch(startSetTodos()),
});

const mapStateToProps = (state: any) => ({
  todos: filterTodos(state.todos, state.filters),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
