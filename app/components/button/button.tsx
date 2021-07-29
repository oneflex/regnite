import * as React from "react";
import { View, ViewStyle, Button as RNButton } from "react-native";
import { ButtonProps } from "./button.props";
import { spacing } from "../../theme";

const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
};

const Button: React.FC<ButtonProps> = props => {
  const { style, ...buttonProps } = props;

  return (
    <View style={[CONTAINER, style]}>
      <RNButton {...buttonProps} />
    </View>
  );
};

export default Button;
