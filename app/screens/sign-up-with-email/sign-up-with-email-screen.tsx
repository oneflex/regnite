import React from "react";
import { useCredentialsFields } from "../../hooks/useCredentialsFields";
import Heading from "../../components/heading/heading";
import Input from "../../components/input/input";
import Screen from "../../components/screen/screen";
import LoadingButton from "../../components/loading-button/loading-button";
import { startSignUp } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing } from "../../theme";
import { translate } from "../../i18n";
import styled from "@emotion/native";
import { SignUpWithEmailProps } from "./sign-up-with-email";

const Container = styled.View({
  paddingHorizontal: spacing[5],
});

const Title = styled(Heading)({
  paddingVertical: spacing[3],
});

const SignUpInput = styled(Input)({
  marginVertical: spacing[2],
});

const SignUpButton = styled(LoadingButton)({
  paddingVertical: spacing[3],
});

function SignUpWithEmailScreen(props: SignUpWithEmailProps) {
  const credentialsFields = useCredentialsFields();

  return (
    <Screen>
      <Container>
        <Title>{translate("signUpWithEmailScreen.title")}</Title>
        <SignUpInput
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
        <SignUpInput
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
        <SignUpButton
          isLoading={props.isLoading}
          error={props.error}
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
        >
          {translate("common.signUp")}
        </SignUpButton>
      </Container>
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
