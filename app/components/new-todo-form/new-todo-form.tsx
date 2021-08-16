import * as React from "react";
import { NewTodoFormProps } from "./new-todo-form.props";
import { useState } from "react";
import { spacing } from "../../theme";
import { connect } from "react-redux";
import Heading from "../heading/heading";
import { startAddTodo } from "../../actions/todos/todos";
import { TodoData } from "../../actions/todos/types";
import { translate } from "../../i18n";
import styled from "@emotion/native";
import Input from "../input/input";
import Button from "../button/button";
import { Category } from "../../types/filters";

const Container = styled.View(() => ({
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[2],
}));

const SubHeading = styled(Heading)(() => ({
  paddingBottom: spacing[2],
}));

const Form = styled.View(() => ({
  flexDirection: "row",
}));

const InputContainer = styled.View(() => ({
  flex: 1,
  paddingRight: spacing[1],
}));

const TextInput = styled(Input)(() => ({
  fontSize: spacing[5],
  paddingVertical: spacing[2],
}));

interface SubmitButtonProps {
  category: Category;
}
const SubmitButton = styled(Button)<SubmitButtonProps>(props => ({
  marginHorizontal: spacing[1],
  flex: 1,
  backgroundColor:
    props.category === "personal"
      ? props.theme.primary[100]
      : props.theme.primary[400],
  borderColor:
    props.category === "personal"
      ? props.theme.primary[100]
      : props.theme.primary[400],
}));

const NewTodoForm: React.FC<NewTodoFormProps> = props => {
  const [description, setDescription] = useState<string>("");

  function handleSubmitTodo(type: "work" | "personal") {
    props.addTodo({
      isCompleted: false,
      description,
      type,
    });
    setDescription("");
  }

  return (
    <Container style={props.style}>
      <SubHeading scale={3}>
        {translate("homeScreen.subtitle.newTask")}
      </SubHeading>
      <Form>
        <InputContainer>
          <TextInput value={description} onChangeText={setDescription} />
        </InputContainer>
        <SubmitButton
          category="personal"
          disabled={!description}
          onPress={() => handleSubmitTodo("personal")}
        >
          +
        </SubmitButton>
        <SubmitButton
          category="work"
          disabled={!description}
          onPress={() => handleSubmitTodo("work")}
        >
          +
        </SubmitButton>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: TodoData) => dispatch(startAddTodo(todo)),
});

export default connect(undefined, mapDispatchToProps)(NewTodoForm);
