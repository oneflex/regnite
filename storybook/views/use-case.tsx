import styled from "@emotion/native";
import * as React from "react";
import { ViewStyle } from "react-native";
import { spacing, typography } from "../../app/theme";

const Container = styled.View(props => ({
  backgroundColor: props.theme.background[100],
}));

const Header = styled.View(() => ({
  paddingTop: spacing[5],
  paddingHorizontal: spacing[5],
}));

const Title = styled.Text(props => ({
  fontFamily: typography.primary.bold,
  fontSize: spacing[5],
  fontWeight: "600",
  color: props.theme.text[100],
}));

const Description = styled.Text(props => ({
  paddingVertical: spacing[2],
  fontSize: spacing[4],
  fontWeight: "600",
  color: props.theme.text[200],
}));

const Component = styled.View((props: any) => ({
  padding: props.noPad ? 0 : spacing[4],
  backgroundColor: props.noBackground
    ? props.theme.transparent
    : props.theme.background[100],
}));

export interface UseCaseProps {
  /** The title. */
  title: string;
  /** When should we be using this? */
  description?: string;
  /** The component use case. */
  children: React.ReactNode;
  /** A style override. Rarely used. */
  style?: ViewStyle;
  /** Don't use any padding because it's important to see the spacing. */
  noPad?: boolean;
  /** Don't use background color because it's important to see the color. */
  noBackground?: boolean;
}

export function UseCase(props: UseCaseProps) {
  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
        {props.description ? (
          <Description>{props.description}</Description>
        ) : null}
      </Header>
      <Component noPad={props.noPad} noBackground={props.noBackground}>
        {props.children}
      </Component>
    </Container>
  );
}
