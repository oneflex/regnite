import React from "react";
import { useCredentialsFields } from "../../hooks/useCredentialsFields";
import Heading from "../../components/heading/heading";
import InputBox from "../../components/input-box/input-box";
import Screen from "../../components/screen/screen";
import Button from "../../components/button/button";

function SignUpWithEmailScreen() {
  const credentialsFields = useCredentialsFields();

  return (
    <Screen>
      <Heading text="Sign up with email" />
      <InputBox
        value={credentialsFields.email.value}
        onChangeText={credentialsFields.email.update}
        label="EMAIL"
        placeholder="Email"
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        error={
          !!credentialsFields.email.value && !credentialsFields.email.isValid
        }
        errorMessage="Invalid Email"
      />

      <InputBox
        value={credentialsFields.password.value}
        onChangeText={credentialsFields.password.update}
        label="PASSWORD"
        placeholder="Password"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
        error={
          !!credentialsFields.password.value &&
          !credentialsFields.password.isValid
        }
        errorMessage="Password must be at least 6 character long, with one upper case letter and one number"
      />
      <Button
        title="Sign Up"
        onPress={() => 1}
        disabled={
          !credentialsFields.email.value ||
          !credentialsFields.password.value ||
          !credentialsFields.password.isValid ||
          !credentialsFields.email.isValid
        }
      />
    </Screen>
  );
}

export default SignUpWithEmailScreen;
