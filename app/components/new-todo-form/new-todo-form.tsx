import * as React from "react";
import { NewTodoFormProps } from "./new-todo-form.props";
import { View, ViewStyle, TextInput } from "react-native";
import SubHeading from "../sub-heading/sub-heading";
import { useState } from "react";
import { color, spacing } from "../../theme";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todos/todos";
import { updateFilterBy, updateSortBy } from "../../actions/filters/filters";
import { TodoData } from "../../actions/todos/types";
import SubmitButton from "../submit-button/submit-button";
import { Category, Sort } from "../../types/filters";
import CategoryButton from "../category-button/category-button";
import SortButton from "../sort-button/sort-button";
import { Todo } from "../../types";

const CONTAINER: ViewStyle = { alignItems: "center" };

const FORM: ViewStyle = {
  flexDirection: "row",
};

const INPUT: ViewStyle = {
  backgroundColor: color.secondaryBackground,
  height: 40,
  width: 260,
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[5],
  marginVertical: spacing[1],
  borderRadius: 15,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.09,
  shadowRadius: 2.65,
  elevation: 4,
};

const NewTodoForm: React.FC<NewTodoFormProps> = props => {
  const { style } = props;
  const [description, setDescription] = useState<string>("");

  function handleSubmitTodo(type: "work" | "personal") {
    props.addTodo({
      description: description,
      isCompleted: false,
      type,
    });
    setDescription("");
  }

  return (
    <View style={[CONTAINER, style]}>
      <View style={FORM}>
        {["personal", "all", "work"].map((type: Category) => {
          return (
            <CategoryButton
              key={type}
              text={type}
              todosCompleted={props.todosCount[type].completed}
              todosNumber={props.todosCount[type].total}
              color={color.category[type]}
              handleClick={() => props.updateFilterBy(type)}
            />
          );
        })}
      </View>
      <View style={FORM}>
        <SortButton
          text={"sort by a-z"}
          handleClick={() => props.updateSortBy("nameAsc")}
        />
        <SortButton
          text={"sort by z-a"}
          handleClick={() => props.updateSortBy("nameDes")}
        />
      </View>
      <SubHeading text="ADD NEW TASK" />
      <View style={FORM}>
        <TextInput
          style={INPUT}
          value={description}
          onChangeText={setDescription}
        />
        <SubmitButton
          color={color.primary}
          disabled={!description}
          handleClick={() => handleSubmitTodo("personal")}
        />
        <SubmitButton
          color={color.secondaryPrimary}
          disabled={!description}
          handleClick={() => handleSubmitTodo("work")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const todosCount: any = {};
  ["all", "personal", "work"].forEach(type => {
    todosCount[type] = {};
    todosCount[type].total = state.todos.filter(
      (todo: Todo) => todo.type === type || type === "all",
    ).length;
    todosCount[type].completed = state.todos.filter(
      (todo: Todo) =>
        (todo.type === type || type === "all") && todo.isCompleted,
    ).length;
  });

  return {
    todosCount,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: TodoData) => dispatch(addTodo(todo)),
  updateFilterBy: (type: Category) => dispatch(updateFilterBy(type)),
  updateSortBy: (type: Sort) => dispatch(updateSortBy(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
