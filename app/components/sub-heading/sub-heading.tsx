import * as React from "react";
import { SubHeadingProps } from "./sub-heading.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";
import { color } from "../../theme";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  paddingVertical: 25,
};

const TEXT: TextStyle = {
  fontSize: 15,
  color: color.dim,
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
