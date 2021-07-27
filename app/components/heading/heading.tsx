import * as React from "react";
import { HeadingProps } from "./Heading.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";
import { color, spacing, typography } from "../../theme";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[5],
};

const TEXT: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 35,
  color: color.text,
  fontWeight: "bold",
};

const Heading: React.FC<HeadingProps> = props => {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <Text style={TEXT}>{props.text}</Text>
    </View>
  );
};

export default Heading;
