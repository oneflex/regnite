import React from "react";
import { View, ViewStyle } from "react-native";
import { connect } from "react-redux";
import Heading from "../../components/heading/heading";
import Screen from "../../components/screen/screen";
import Button from "../../components/button/button";
import { startSignInWithFacebook } from "../../actions/auth/auth";
import ErrorMessage from "../../components/error-message/error-message";
import { spacing } from "../../theme";

const ERROR: ViewStyle = {
  paddingHorizontal: spacing[5],
};

const BUTTONS: ViewStyle = {
  alignItems: "center",
};

function WelcomeScreen(props: any) {
  return (
    <Screen>
      <Heading text="Welcome!"></Heading>
      <View style={BUTTONS}>
        <Button
          title="Email and password"
          onPress={() => props.navigation.push("SignInWithEmail")}
        ></Button>
        <Button title="Gmail" onPress={() => 1}></Button>
        <Button title="Facebook" onPress={props.signInWithFacebook}></Button>
        {props.error && (
          <View style={ERROR}>
            <ErrorMessage text="We encountered an error while trying to sign you in. Please try again later 🙏🏻" />
          </View>
        )}
      </View>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signInWithFacebook: () => dispatch(startSignInWithFacebook()),
});

const mapStateToProps = (state: any) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
