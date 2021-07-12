import * as React from "react";
import { HeadingProps } from "./Heading.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";
import { color } from "../../theme";

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  paddingVertical: 25,
};

const TEXT: TextStyle = {
  fontSize: 35,
  color: color.text,
  fontWeight: "bold",
};

function Heading(props: HeadingProps) {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <Text style={TEXT}>{props.text}</Text>
    </View>
  );
}

export default Heading;
