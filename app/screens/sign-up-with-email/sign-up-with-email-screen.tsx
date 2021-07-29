import React from "react";
import Heading from "../../components/heading/heading";
import InputBox from "../../components/input-box/input-box";
import Screen from "../../components/screen/screen";

function SignUpWithEmailScreen() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Screen>
      <Heading text="Sign up with email" />
      <InputBox
        value={email}
        onChangeText={setEmail}
        label="EMAIL"
        placeholder="Email"
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <InputBox
        value={password}
        onChangeText={setPassword}
        label="PASSWORD"
        placeholder="Password"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
      />
      <InputBox
        value={password}
        onChangeText={setPassword}
        label="CONFIRM PASSWORD"
        placeholder="Confirm password"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
      />
    </Screen>
  );
}

export default SignUpWithEmailScreen;
