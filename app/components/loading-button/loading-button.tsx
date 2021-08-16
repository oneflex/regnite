import * as React from "react";
import { ActivityIndicator, View, ViewStyle } from "react-native";
import { LoadingButtonProps } from "./loading-button.props";
import Button from "../button/button";
import ErrorMessage from "../error-message/error-message";

const CONTAINER: ViewStyle = {};

const LoadingButton: React.FC<LoadingButtonProps> = props => {
  const { style, error, isLoading, ...buttonProps } = props;

  if (isLoading)
    return (
      <View style={[CONTAINER, style]}>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={[CONTAINER, style]}>
      <Button {...buttonProps} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
};

export default LoadingButton;
