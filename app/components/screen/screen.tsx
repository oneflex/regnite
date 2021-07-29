import * as React from "react";
import { ScreenProps } from "./screen.props";
import { View, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useIsFirstRoute } from "../../hooks";
import Header from "../header/header";

const FULL: ViewStyle = { flex: 1 };

const Screen: React.FC<ScreenProps> = props => {
  const { style, showHeader = true } = props;
  const navigation = useNavigation();
  const isFirstRoute = useIsFirstRoute();

  return (
    <View style={[FULL, style]}>
      {!isFirstRoute && showHeader && (
        <Header handleBackButtonClick={() => navigation.goBack()} />
      )}
      {props.children}
    </View>
  );
};

export default Screen;
