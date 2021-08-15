import * as React from "react";
import { ScreenProps } from "./screen.props";
import { useNavigation } from "@react-navigation/native";
import { useIsFirstRoute } from "../../hooks";
import Header from "../header/header";
import styled from "@emotion/native";

const Container = styled.View(props => ({
  flex: 1,
  backgroundColor: props.theme.background[100],
}));

const Screen: React.FC<ScreenProps> = props => {
  const { style, showHeader = true } = props;
  const navigation = useNavigation();
  const isFirstRoute = useIsFirstRoute();

  return (
    <Container style={style}>
      {!isFirstRoute && showHeader && (
        <Header handleBackButtonClick={() => navigation.goBack()} />
      )}
      {props.children}
    </Container>
  );
};

export default Screen;
