import React from "react";
import { View, ViewStyle, Button } from "react-native";
import { connect } from "react-redux";
import { startSignIn } from "../../actions/auth/auth";
import Heading from "../../components/heading/heading";
import { spacing } from "../../theme";
import Screen from "../../components/screen/screen";

const BUTTON: ViewStyle = {
  paddingVertical: spacing[3],
};

const BUTTONS: ViewStyle = {
  alignItems: "center",
};

function WelcomeScreen(props: any) {
  return (
    <Screen>
      <Heading text="Welcome!"></Heading>
      <View style={BUTTONS}>
        <View style={BUTTON}>
          <Button
            title="Email and password"
            onPress={() => props.navigation.push("SignInWithEmail")}
          ></Button>
        </View>
        <View style={BUTTON}>
          <Button title="Gmail" onPress={() => props.signIn()}></Button>
        </View>
        <View style={BUTTON}>
          <Button title="Facebook" onPress={() => props.signIn()}></Button>
        </View>
        <View style={BUTTON}>
          <Button title="Apple" onPress={() => props.signIn()}></Button>
        </View>
      </View>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signIn: () => dispatch(startSignIn()),
});

export default connect(undefined, mapDispatchToProps)(WelcomeScreen);
