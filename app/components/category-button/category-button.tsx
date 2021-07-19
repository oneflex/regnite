import * as React from "react";
import { CategoryButtonProps } from "./category-button.props";
import { TextStyle, TouchableOpacity, ViewStyle, Text } from "react-native";
import { color, spacing } from "../../theme";

const CATEGORY_BUTTON: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.secondaryBackground,
  marginVertical: spacing[1],
  marginLeft: spacing[3],
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[5],
  width: 130,
  height: 80,
  borderRadius: 15,
  shadowColor: "#000",
  shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowOpacity: 0.19,
  shadowRadius: 2.65,
  elevation: 4,
};

const CATEGORY_BUTTON_TEXT: TextStyle = {
  fontSize: spacing[4],
  color: color.text,
  textAlignVertical: "center",
};

const CategoryButton: React.FC<CategoryButtonProps> = props => {
  const { style, handleClick, color, todosNumber, text } = props;

  return (
    <TouchableOpacity style={[CATEGORY_BUTTON, style]} onPress={handleClick}>
      <Text style={[CATEGORY_BUTTON_TEXT, { color }]}>
        {text}-{todosNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
