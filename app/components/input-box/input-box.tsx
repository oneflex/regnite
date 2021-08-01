import * as React from "react";
import { InputBoxProps } from "./input-box.props";
import { View, ViewStyle, TextStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { spacing, color } from "../../theme";
import { condStyle } from "../../utils/cond-style";
import SubHeading from "../sub-heading/sub-heading";
import ErrorMessage from "../error-message/error-message";

const CONTAINER: ViewStyle = {
  marginVertical: spacing[1],
  marginHorizontal: spacing[5],
};

const INPUT: ViewStyle = {
  flexDirection: "row",
  padding: spacing[4],
  backgroundColor: color.secondaryBackground,
  borderRadius: 10,
  borderColor: color.dimmer,
  borderWidth: 2,
};

const INPUT_ERROR: ViewStyle = {
  borderColor: color.error,
};

const INPUT_TEXT: TextStyle = {
  fontSize: spacing[5],
  color: color.text,
};

const InputBox: React.FC<InputBoxProps> = props => {
  const { style, error, errorMessage, ...textInputProps } = props;

  return (
    <View style={[CONTAINER, style]}>
      {props.label && <SubHeading text={props.label} />}
      <TextInput
        style={[INPUT, INPUT_TEXT, condStyle(error, INPUT_ERROR)]}
        {...textInputProps}
      />
      {props.error && <ErrorMessage text={errorMessage} />}
    </View>
  );
};

export default InputBox;