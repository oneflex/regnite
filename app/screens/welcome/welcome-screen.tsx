import React from "react";
import { View, ViewStyle } from "react-native";
import { connect } from "react-redux";
import Heading from "../../components/heading/heading";
import Screen from "../../components/screen/screen";
import Button from "../../components/button/button";
import {
  startSignInAnonymously,
  startSignInWithFacebook,
  startSignInWithGoogle,
} from "../../actions/auth/auth";
import ErrorMessage from "../../components/error-message/error-message";
import { spacing } from "../../theme";
import { translate } from "../../i18n";
import styled from "@emotion/native";

const Error = styled.View({
  paddingHorizontal: spacing[5],
});

const MarginButoon = styled(Button)(props => ({
  margin: spacing[3],
}));

const PadHeading = styled(Heading)({
  padding: spacing[3],
});

function WelcomeScreen(props: any) {
  return (
    <Screen>
      <PadHeading>{translate("welcomeScreen.title")}</PadHeading>
      <MarginButoon
        onPress={() => props.navigation.push("SignInWithEmail")}
        kind="primary"
      >
        {translate("welcomeScreen.signInMethods.email")}
      </MarginButoon>
      <MarginButoon onPress={props.signInAnonymously} kind="secondary">
        {translate("welcomeScreen.signInMethods.anonymous")}
      </MarginButoon>
      <MarginButoon onPress={props.signInWithGoogle} kind="secondary">
        {translate("welcomeScreen.signInMethods.gmail")}
      </MarginButoon>
      <MarginButoon onPress={props.signInWithFacebook} kind="secondary">
        {translate("welcomeScreen.signInMethods.facebook")}
      </MarginButoon>
      {props.error && (
        <Error>
          <ErrorMessage>{props.error}</ErrorMessage>
        </Error>
      )}
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signInWithFacebook: () => dispatch(startSignInWithFacebook()),
  signInWithGoogle: () => dispatch(startSignInWithGoogle()),
  signInAnonymously: () => dispatch(startSignInAnonymously()),
});

const mapStateToProps = (state: any) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
