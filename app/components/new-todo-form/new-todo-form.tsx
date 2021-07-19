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
  const [description, setDescription] = useState<string>("");
  const [workNumber, setWorkNumber] = useState<number>(0);
  const [personalNumber, setPersonalNumber] = useState<number>(0);

  function handleSubmitTodo(type: "work" | "personal") {
    props.addTodo({
      description: description,
      isCompleted: false,
      type,
    });
    if (type === "work") setWorkNumber(workNumber + 1);
    else setPersonalNumber(personalNumber + 1);
    setDescription("");
  }

  function handleCategoryTodo(type: "work" | "personal" | "all") {
    props.updateFilterBy(type);
    setDescription("");
  }

  function handleSortTodo(type: "nameDes" | "nameAsc") {
    props.updateSortBy(type);
    setDescription("");
  }

  return (
    <View style={[CONTAINER]}>
      <View style={FORM}>
        <CategoryButton
          text={"personal"}
          todosNumber={personalNumber}
          color={color.primary}
          handleClick={() => handleCategoryTodo("personal")}
        />

        <CategoryButton
          text={"any"}
          todosNumber={personalNumber + workNumber}
          color={color.palette.grey}
          handleClick={() => handleCategoryTodo("all")}
        />
        <CategoryButton
          text={"work"}
          color={color.secondaryPrimary}
          todosNumber={workNumber}
          handleClick={() => handleCategoryTodo("work")}
        />
      </View>
      <View style={FORM}>
        <SortButton
          text={"sort by a-z"}
          handleClick={() => handleSortTodo("nameAsc")}
        />
        <SortButton
          text={"sort by z-a"}
          handleClick={() => handleSortTodo("nameDes")}
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

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: TodoData) => dispatch(addTodo(todo)),
  updateFilterBy: (type: Category) => dispatch(updateFilterBy(type)),
  updateSortBy: (type: Sort) => dispatch(updateSortBy(type)),
});

export default connect(undefined, mapDispatchToProps)(NewTodoForm);
