import * as React from "react";
import { TodoProps } from "./todo.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { color, typography } from "../../theme";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
};

const DESCRIPTION_CONTAINER: ViewStyle = {
  justifyContent: "center",
  marginBottom: 5,
};

const DESCRIPTION: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 26,
  color: color.primary,
};

const DESCRIPTION_CROSSED: TextStyle = {
  ...DESCRIPTION,
  textDecorationLine: "line-through",
  opacity: 0.3,
};

function Todo(props: TodoProps) {
  const { style, description, isCompleted } = props;

  return (
    <View style={[CONTAINER, style]}>
      <CheckBox checked={isCompleted} />
      <View style={DESCRIPTION_CONTAINER}>
        <Text style={isCompleted ? DESCRIPTION_CROSSED : DESCRIPTION}>
          {description}
        </Text>
      </View>
    </View>
  );
}

export default Todo;
