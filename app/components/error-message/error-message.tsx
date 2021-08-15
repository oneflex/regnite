import * as React from "react";
import { ErrorMessageProps } from "./error-message.props";
import styled from "@emotion/native";
import { spacing, typography } from "../../theme";

const Container = styled.View(() => ({
  flexDirection: "row",
  paddingVertical: spacing[3],
}));

const Text = styled.Text(props => ({
  fontFamily: typography.primary.bold,
  fontSize: 15,
  color: props.theme.error[100],
  fontWeight: "600",
  letterSpacing: 1.5,
}));

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  return (
    <Container style={props.style}>
      <Text>{props.children}</Text>
    </Container>
  );
};

export default ErrorMessage;
