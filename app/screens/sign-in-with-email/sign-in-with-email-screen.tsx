import React from "react";
import {
  Button,
  View,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import Heading from "../../components/heading/heading";
import InputBox from "../../components/input-box/input-box";
import { color, spacing } from "../../theme";
import Screen from "../../components/screen/screen";

const SUBMIT_BUTTON: ViewStyle = {
  paddingVertical: spacing[5],
};

const SIGN_UP_MESSAGE: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
};

const SIGN_UP_TEXT: TextStyle = {
  fontSize: spacing[4],
};

const SIGN_UP_BUTTON: TextStyle = {
  marginLeft: spacing[1],
  color: color.secondaryPrimary,
};

function SignInWithEmailScreen(props: any) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Screen>
      <Heading text="Sign in with email" />
      <InputBox
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        autoCompleteType="email"
        autoFocus
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <InputBox
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
      />
      <View style={SUBMIT_BUTTON}>
        <Button title="Sign In" onPress={() => 1}></Button>
      </View>
      <View style={SIGN_UP_MESSAGE}>
        <Text style={SIGN_UP_TEXT}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.push("SignUpWithEmail")}
        >
          <Text style={[SIGN_UP_TEXT, SIGN_UP_BUTTON]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

export default SignInWithEmailScreen;
