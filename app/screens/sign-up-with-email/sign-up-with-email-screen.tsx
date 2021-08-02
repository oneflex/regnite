import React from "react";
import { ViewStyle } from "react-native";
import { useCredentialsFields } from "../../hooks/useCredentialsFields";
import Heading from "../../components/heading/heading";
import InputBox from "../../components/input-box/input-box";
import Screen from "../../components/screen/screen";
import LoadingButton from "../../components/loading-button/loading-button";
import { startSignUp } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing } from "../../theme";

const LOADING_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[6],
};

function SignUpWithEmailScreen(props: any) {
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
        autoCapitalize="none"
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
      <LoadingButton
        style={LOADING_BUTTON}
        isLoading={props.isLoading}
        error={props.error}
        title="Sign Up"
        onPress={() =>
          props.signUp(
            credentialsFields.email.value,
            credentialsFields.password.value,
          )
        }
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

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (email: string, password: string) =>
    dispatch(startSignUp(email, password)),
});

const mapStateToProps = (state: any) => ({
  isLoading: state.auth.status === "loading",
  error: state.auth.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpWithEmailScreen);
