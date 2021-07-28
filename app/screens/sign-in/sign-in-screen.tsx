import React from "react";
import { View, ViewStyle, Button } from "react-native";
import { connect } from "react-redux";
import { startSignIn } from "../../actions/auth/auth";
import Heading from "../../components/heading/heading";

const FULL: ViewStyle = { flex: 1 };

function SignInScreen(props: any) {
  return (
    <View style={FULL}>
      <Heading text="Welcome!"></Heading>
      <Button title="Sign In" onPress={() => props.signIn()}></Button>
    </View>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signIn: () => dispatch(startSignIn()),
});

export default connect(undefined, mapDispatchToProps)(SignInScreen);
