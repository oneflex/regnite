import * as React from "react";
import { HeadingProps } from "./Heading.props";
import { spacing, typography } from "../../theme";
import styled from "@emotion/native";

const Container = styled.View(() => ({
  flexDirection: "row",
  borderColor: "red",
}));

interface TextProps {
  fontSize: number;
}
const Text = styled.Text<TextProps>(props => ({
  fontFamily: typography.primary.bold,
  fontSize: props.fontSize,
  color: props.theme.text[100],
  fontWeight: "bold",
}));

const Heading: React.FC<HeadingProps> = ({ children, scale = 1, style }) => {
  const fontSize = {
    1: spacing[6],
    2: spacing[5],
    3: spacing[4],
  };

  return (
    <Container style={style}>
      <Text fontSize={fontSize[scale]}>{children}</Text>
    </Container>
  );
};

export default Heading;
