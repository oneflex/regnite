import * as React from "react";
import { InputProps } from "./input.props";
import styled from "@emotion/native";
import { spacing, typography } from "../../theme";
import Heading from "../heading/heading";
import ErrorMessage from "../error-message/error-message";

const Container = styled.View(() => ({}));

const Label = styled(Heading)(() => ({
  paddingVertical: spacing[3],
}));

interface TextInputProps {
  error: boolean;
}
const TextInput = styled.TextInput<TextInputProps>(props => ({
  flexDirection: "row",
  padding: spacing[4],
  backgroundColor: props.theme.background[100],
  borderColor: props.error ? props.theme.error[100] : props.theme.text[100],
  borderWidth: 3,
  fontSize: spacing[5],
  color: props.theme.text[100],
  fontFamily: typography.primary.regular,
}));

const Input: React.FC<InputProps> = props => {
  const { style, label, error, errorMessage, ...textInputProps } = props;

  return (
    <Container>
      {label && <Label scale={2}>{label}</Label>}
      <TextInput style={style} error={error} {...textInputProps} />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;
