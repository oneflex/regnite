import * as React from "react";
import { ButtonProps } from "./button.props";
import styled from "@emotion/native";
import { spacing, typography } from "../../theme";

interface ContainerProps {
  disabled: boolean;
}
const Container = styled.View<ContainerProps>(props => ({
  opacity: props.disabled ? 0.3 : 1,
}));

interface TouchableOpacityProps {
  kind: "primary" | "secondary" | "tertiary";
}
const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>(
  props => ({
    backgroundColor:
      props.kind === "primary"
        ? props.theme.text[100]
        : props.theme.background[100],
    borderColor: props.theme.text[100],
    borderWidth: props.kind === "tertiary" ? 0 : 3,
    padding: spacing[3],
    flexDirection: props.kind === "tertiary" ? "row" : "column",
    alignSelf: props.kind === "tertiary" ? "flex-start" : "stretch",
  }),
);

interface TextProps {
  kind: "primary" | "secondary" | "tertiary";
  fontSize: number;
}
const Text = styled.Text<TextProps>(props => ({
  color:
    props.kind === "primary"
      ? props.theme.background[100]
      : props.theme.text[100],
  fontFamily: typography.primary.bold,
  textAlign: "center",
  fontSize: props.fontSize,
}));

const Button: React.FC<ButtonProps> = props => {
  const { disabled, kind = "primary", fontSize = 14, ...buttonProps } = props;
  return (
    <Container disabled={disabled}>
      <TouchableOpacity kind={kind} {...buttonProps} disabled={disabled}>
        <Text fontSize={fontSize} kind={kind}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Button;
