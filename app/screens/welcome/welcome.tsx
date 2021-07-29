import React from "react";
import { View, ViewStyle } from "react-native";
import { connect } from "react-redux";
import { startSignIn } from "../../actions/auth/auth";
import Heading from "../../components/heading/heading";
import Screen from "../../components/screen/screen";
import Button from "../../components/button/button";

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
        <Button title="Gmail" onPress={() => props.signIn()}></Button>
        <Button title="Facebook" onPress={() => props.signIn()}></Button>
        <Button title="Apple" onPress={() => props.signIn()}></Button>
      </View>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signIn: () => dispatch(startSignIn()),
});

export default connect(undefined, mapDispatchToProps)(WelcomeScreen);
