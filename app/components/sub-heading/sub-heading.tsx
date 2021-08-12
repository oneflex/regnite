import * as React from "react";
import { SubHeadingProps } from "./sub-heading.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";
import { spacing, typography } from "../../theme";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[3],
};

const TEXT: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 15,
  color: "white",
  fontWeight: "600",
  letterSpacing: 1.5,
};

const SubHeading: React.FC<SubHeadingProps> = props => {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <Text style={TEXT}>{props.text}</Text>
    </View>
  );
};

export default SubHeading;
