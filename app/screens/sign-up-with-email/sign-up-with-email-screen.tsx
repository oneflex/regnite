import React from "react";
import { ViewStyle } from "react-native";
import { useCredentialsFields } from "../../hooks/useCredentialsFields";
import Heading from "../../components/heading/heading";
import Input from "../../components/input/input";
import Screen from "../../components/screen/screen";
import LoadingButton from "../../components/loading-button/loading-button";
import { startSignUp } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing } from "../../theme";
import { translate } from "../../i18n";

const LOADING_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[6],
};

function SignUpWithEmailScreen(props: any) {
  const credentialsFields = useCredentialsFields();

  return (
    <Screen>
      <Heading>{translate("signUpWithEmailScreen.title")}</Heading>
      <Input
        value={credentialsFields.email.value}
        onChangeText={credentialsFields.email.update}
        label={translate("common.email").toLocaleUpperCase()}
        placeholder={translate("common.placeholder.email")}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        error={
          !!credentialsFields.email.value && !credentialsFields.email.isValid
        }
        errorMessage={translate("errors.invalidEmail")}
      />
      <Input
        value={credentialsFields.password.value}
        onChangeText={credentialsFields.password.update}
        label={translate("common.password").toLocaleUpperCase()}
        placeholder={translate("common.placeholder.password")}
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
        error={
          !!credentialsFields.password.value &&
          !credentialsFields.password.isValid
        }
        errorMessage={translate("errors.invalidPassword")}
      />
      <LoadingButton
        style={LOADING_BUTTON}
        isLoading={props.isLoading}
        error={props.error}
        title={translate("common.signUp")}
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
