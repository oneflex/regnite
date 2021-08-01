import * as React from "react";
import { ErrorMessageProps } from "./error-message.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";
import { spacing, color, typography } from "../../theme";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[3],
};

const TEXT: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 15,
  color: color.error,
  fontWeight: "600",
  letterSpacing: 1.5,
};

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <Text style={TEXT}>{props.text}</Text>
    </View>
  );
};

export default ErrorMessage;
