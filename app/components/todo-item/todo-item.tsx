import * as React from "react";
import { TodoProps } from "./todo-item.props";
import { spacing, typography } from "../../theme";
import styled from "@emotion/native";
import { connect } from "react-redux";
import Checkbox from "../checkbox/checkbox";
import { startRemoveTodo, startUpdateTodo } from "../../actions/todos/todos";
import { useTheme } from "@emotion/react";
import Button from "../button/button";
import { Category } from "../../types/filters";

const Container = styled.View({
  flex: 1,
  flexDirection: "row",
  marginHorizontal: spacing[5],
  marginVertical: spacing[1],
});

interface TodoContainerProps {
  category: Category;
}
const TodoContainer = styled.View<TodoContainerProps>(props => ({
  flex: 1,
  flexDirection: "row",
  padding: spacing[5],
  backgroundColor:
    props.category === "personal"
      ? props.theme.primary[100]
      : props.theme.primary[400],
}));

const CheckboxContainer = styled.View(() => ({
  justifyContent: "center",
  alignItems: "center",
}));

const DescriptionContainer = styled.View(() => ({
  justifyContent: "center",
  marginLeft: spacing[5],
}));

interface DescriptionProps {
  isCompleted: boolean;
}
const Description = styled.Text<DescriptionProps>(props => ({
  fontFamily: typography.primary.regular,
  fontSize: 30,
  color: props.theme.background[100],
  textDecorationLine: props.isCompleted ? "line-through" : "none",
  opacity: props.isCompleted ? 0.3 : 1,
}));

interface DeleteButtonProps {
  category: Category;
}
const DeleteButton = styled(Button)<DeleteButtonProps>(props => ({
  padding: spacing[5],
  backgroundColor:
    props.category === "personal"
      ? props.theme.primary[100]
      : props.theme.primary[400],
  borderColor:
    props.category === "personal"
      ? props.theme.primary[100]
      : props.theme.primary[400],
  height: "100%",
  justifyContent: "center",
}));

export const TodoItem: React.FC<TodoProps> = props => {
  const { style, description, isCompleted, type, id } = props;
  const theme = useTheme();

  return (
    <Container>
      <TodoContainer category={type} style={style}>
        <CheckboxContainer>
          <Checkbox
            isChecked={isCompleted}
            size={30}
            color={
              type === "personal" ? theme.primary[100] : theme.primary[400]
            }
            handlePress={() => props.handleClickCheckbox(id, isCompleted)}
          />
        </CheckboxContainer>
        <DescriptionContainer>
          <Description isCompleted={isCompleted}>{description}</Description>
        </DescriptionContainer>
      </TodoContainer>
      <DeleteButton
        onPress={() => props.handleClickRemove(id)}
        category={type}
        kind="primary"
        fontSize={30}
      >
        🗑
      </DeleteButton>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  handleClickCheckbox: (id: string, isCompleted: boolean) => {
    dispatch(startUpdateTodo(id, { isCompleted: !isCompleted }));
  },
  handleClickRemove: (id: string) => {
    dispatch(startRemoveTodo(id));
  },
});

export default connect(undefined, mapDispatchToProps)(TodoItem);
