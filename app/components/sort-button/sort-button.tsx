import * as React from "react";
import { SortButtonProps } from "./sort-button.props";
import { TextStyle, TouchableOpacity, ViewStyle, Text } from "react-native";
import { color, spacing } from "../../theme";

const SORT_BUTTON: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.secondaryBackground,
  marginVertical: spacing[1],
  marginLeft: spacing[3],
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[5],
  width: 140,
  height: 30,
  borderRadius: 15,
  shadowColor: "#000",
  shadowOffset: {
    width: 1,
    height: 2,
  },
  shadowOpacity: 0.19,
  shadowRadius: 2.65,
  elevation: 4,
};

const SORT_BUTTON_TEXT: TextStyle = {
  fontSize: spacing[4],
  color: color.text,
  textAlignVertical: "center",
};

const SortButton: React.FC<SortButtonProps> = props => {
  const { text, handleClick } = props;
  return (
    <TouchableOpacity style={[SORT_BUTTON]} onPress={handleClick}>
      <Text style={[SORT_BUTTON_TEXT]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SortButton;
