import * as React from "react";
import { MyChairProps } from "./my-chair.props";
import { TextStyle, View, ViewStyle, Text } from "react-native";

const CONTAINER: ViewStyle = { };

const TEXT: TextStyle = {
  justifyContent: "center",
};

const MyChair: React.FC<MyChairProps> = props => {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <Text style={TEXT}>MyChair</Text>
    </View>
  );
}

export default MyChair;
