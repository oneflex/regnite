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

const ERROR: ViewStyle = {
  paddingHorizontal: spacing[5],
};

const BUTTONS: ViewStyle = {
  alignItems: "center",
};

function WelcomeScreen(props: any) {
  return (
    <Screen>
      <Heading text={translate("welcomeScreen.title")}></Heading>
      <View style={BUTTONS}>
        <Button
          title={translate("welcomeScreen.signInMethods.email")}
          onPress={() => props.navigation.push("SignInWithEmail")}
        ></Button>
        <Button
          title={translate("welcomeScreen.signInMethods.anonymous")}
          onPress={props.signInAnonymously}
        ></Button>
        <Button
          title={translate("welcomeScreen.signInMethods.gmail")}
          onPress={props.signInWithGoogle}
        ></Button>
        <Button
          title={translate("welcomeScreen.signInMethods.facebook")}
          onPress={props.signInWithFacebook}
        ></Button>
        {props.error && (
          <View style={ERROR}>
            <ErrorMessage text={props.error} />
          </View>
        )}
      </View>
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
