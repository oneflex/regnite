import React from "react";
import { TouchableOpacity } from "react-native";
import Heading from "../../components/heading/heading";
import Input from "../../components/input/input";
import Screen from "../../components/screen/screen";
import LoadingButton from "../../components/loading-button/loading-button";
import { startSignIn, updateError } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { translate } from "../../i18n";
import { spacing } from "../../theme";
import styled from "@emotion/native";
import { SignInWithEmailProps } from "./sign-in-with-email";

const Container = styled.View({
  paddingHorizontal: spacing[5],
});

const Title = styled(Heading)({
  paddingVertical: spacing[3],
});

const SignInInput = styled(Input)({
  marginVertical: spacing[2],
});

const SignInButton = styled(LoadingButton)({
  paddingVertical: spacing[3],
});

const SignUpMessage = styled.View({
  justifyContent: "center",
  flexDirection: "row",
  paddingVertical: spacing[6],
});

const SignUpText = styled.Text({
  fontSize: spacing[4],
});

const SignUpButton = styled.Text(props => ({
  marginLeft: spacing[1],
  color: props.theme.text[300],
  fontSize: spacing[4],
}));

function SignInWithEmailScreen(props: SignInWithEmailProps) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Screen>
      <Container>
        <Title>{translate("signInWithEmailScreen.title")}</Title>
        <SignInInput
          value={email}
          onChangeText={setEmail}
          placeholder={translate("common.placeholder.email")}
          autoCompleteType="email"
          autoFocus
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <SignInInput
          value={password}
          onChangeText={setPassword}
          placeholder={translate("common.placeholder.password")}
          autoCompleteType="password"
          textContentType="password"
          secureTextEntry
        />
        <SignInButton
          isLoading={props.isLoading}
          error={props.error}
          onPress={() => props.signIn(email, password)}
          disabled={!email || !password}
        >
          {translate("common.signIn")}
        </SignInButton>
        <SignUpMessage>
          <SignUpText>
            {translate("signInWithEmailScreen.signUpMessage")}
          </SignUpText>
          <TouchableOpacity
            onPress={() => {
              props.clearError();
              props.navigation.push("SignUpWithEmail");
            }}
          >
            <SignUpButton>{translate("common.signUp")}</SignUpButton>
          </TouchableOpacity>
        </SignUpMessage>
      </Container>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (email: string, password: string) =>
    dispatch(startSignIn(email, password)),
  clearError: () => dispatch(updateError(null)),
});

const mapStateToProps = (state: any) => ({
  isLoading: state.auth.status === "loading",
  error: state.auth.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInWithEmailScreen);
