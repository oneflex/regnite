import * as React from "react";
import { HeaderProps } from "./header.props";
import {
  TextStyle,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
} from "react-native";
import { spacing } from "../../theme";

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[5],
};

const BACK_BUTTION: TextStyle = {
  fontSize: spacing[6],
};

const Header: React.FC<HeaderProps> = props => {
  const { style, handleBackButtonClick } = props;

  return (
    <View style={[CONTAINER, style]}>
      <TouchableOpacity onPress={() => handleBackButtonClick()}>
        <Text style={BACK_BUTTION}>{"👈🏻"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
