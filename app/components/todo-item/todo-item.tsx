import * as React from "react";
import { TodoProps } from "./todo-item.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";
import { color, spacing, typography } from "../../theme";
import Checkbox from "../checkbox/checkbox";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[5],
  marginVertical: spacing[1],
  backgroundColor: color.secondaryBackground,
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

const DESCRIPTION_CONTAINER: ViewStyle = {
  justifyContent: "center",
  marginLeft: spacing[5],
};

const DESCRIPTION: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 20,
  color: color.text,
};

const DESCRIPTION_CROSSED: TextStyle = {
  ...DESCRIPTION,
  textDecorationLine: "line-through",
  opacity: 0.3,
};

const TodoItem: React.FC<TodoProps> = props => {
  const { style, description, isCompleted } = props;

  return (
    <View style={[CONTAINER, style]}>
      <Checkbox isChecked={isCompleted} size={27} />
      <View style={DESCRIPTION_CONTAINER}>
        <Text style={isCompleted ? DESCRIPTION_CROSSED : DESCRIPTION}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default TodoItem;
