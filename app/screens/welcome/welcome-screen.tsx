import React from "react";
import { connect } from "react-redux";
import Heading from "../../components/heading/heading";
import Screen from "../../components/screen/screen";
import Button from "../../components/button/button";
import {
  startSignInAnonymously,
  startSignInWithFacebook,
  startSignInWithGoogle,
  updateError,
} from "../../actions/auth/auth";
import ErrorMessage from "../../components/error-message/error-message";
import { spacing } from "../../theme";
import { translate } from "../../i18n";
import styled from "@emotion/native";
import { WelcomeProps } from "./welcome";

const Container = styled.View({
  paddingHorizontal: spacing[5],
});

const WelcomeTitle = styled(Heading)({
  paddingVertical: spacing[5],
});

const LoginButton = styled(Button)({
  marginVertical: spacing[3],
});

const Error = styled.View({
  paddingVertical: spacing[5],
  alignSelf: "center",
});

function WelcomeScreen(props: WelcomeProps) {
  return (
    <Screen>
      <Container>
        <WelcomeTitle>{translate("welcomeScreen.title")}</WelcomeTitle>
        <LoginButton
          onPress={() => {
            props.clearError();
            props.navigation.push("SignInWithEmail");
          }}
          kind="primary"
        >
          {translate("welcomeScreen.signInMethods.email")}
        </LoginButton>
        <LoginButton onPress={props.signInAnonymously} kind="secondary">
          {translate("welcomeScreen.signInMethods.anonymous")}
        </LoginButton>
        <LoginButton onPress={props.signInWithGoogle} kind="secondary">
          {translate("welcomeScreen.signInMethods.gmail")}
        </LoginButton>
        <LoginButton onPress={props.signInWithFacebook} kind="secondary">
          {translate("welcomeScreen.signInMethods.facebook")}
        </LoginButton>
        {props.error && (
          <Error>
            <ErrorMessage>{props.error}</ErrorMessage>
          </Error>
        )}
      </Container>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signInWithFacebook: () => dispatch(startSignInWithFacebook()),
  signInWithGoogle: () => dispatch(startSignInWithGoogle()),
  signInAnonymously: () => dispatch(startSignInAnonymously()),
  clearError: () => dispatch(updateError(null)),
});

const mapStateToProps = (state: any) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
