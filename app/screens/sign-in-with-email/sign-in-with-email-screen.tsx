import React from "react";
import {
  View,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import Heading from "../../components/heading/heading";
import Input from "../../components/input/input";
import Screen from "../../components/screen/screen";
import LoadingButton from "../../components/loading-button/loading-button";
import { startSignIn } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { translate } from "../../i18n";
import { spacing } from "../../theme";
import styled from "@emotion/native";

const PaddLoadingButton = styled(LoadingButton)({
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[5],
});

const PaddInput = styled(Input)({
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[5],
});

const SignUpMessage = styled.View({
  justifyContent: "center",
  flexDirection: "row",
});

const SignUpText = styled.Text({
  fontSize: spacing[4],
});

const SignUpButton = styled.Text(props => ({
  marginLeft: spacing[1],
  color: props.theme.text[300],
  fontSize: spacing[4],
}));

const PadHeading = styled(Heading)({
  padding: spacing[3],
});

function SignInWithEmailScreen(props: any) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Screen>
      <PadHeading>{translate("signInWithEmailScreen.title")}</PadHeading>
      <PaddInput
        value={email}
        onChangeText={setEmail}
        placeholder={translate("common.placeholder.email")}
        autoCompleteType="email"
        autoFocus
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
      />
      <PaddInput
        value={password}
        onChangeText={setPassword}
        placeholder={translate("common.placeholder.password")}
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
      />
      <PaddLoadingButton
        isLoading={props.isLoading}
        error={props.error}
        onPress={() => props.signIn(email, password)}
        disabled={!email || !password}
      >
        {translate("common.signIn")}
      </PaddLoadingButton>
      <SignUpMessage>
        <SignUpText>
          {translate("signInWithEmailScreen.signUpMessage")}
        </SignUpText>
        <TouchableOpacity
          onPress={() => props.navigation.push("SignUpWithEmail")}
        >
          <SignUpButton>{translate("common.signUp")}</SignUpButton>
        </TouchableOpacity>
      </SignUpMessage>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (email: string, password: string) =>
    dispatch(startSignIn(email, password)),
});

const mapStateToProps = (state: any) => ({
  isLoading: state.auth.status === "loading",
  error: state.auth.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInWithEmailScreen);
