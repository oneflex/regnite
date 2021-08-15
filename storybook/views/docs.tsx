import styled from "@emotion/native";
import * as React from "react";
import { spacing, typography } from "../../app/theme";
import Markdown from "react-native-markdown-display";
import { useTheme } from "@emotion/react";

export type PropsData = Array<
  [name: string, description: string, defaultValue: string]
>;

const Container = styled.View(props => ({
  backgroundColor: props.theme.background[100],
  paddingHorizontal: spacing[5],
}));

const Header = styled.View(() => ({
  paddingTop: spacing[5],
  paddingBottom: spacing[3],
}));

const Title = styled.Text(props => ({
  fontFamily: typography.primary.bold,
  fontSize: spacing[5],
  fontWeight: "600",
  color: props.theme.text[100],
}));

export interface DescriptionProps {
  /** Information about the component */
  children: string;
}

function Description(props: DescriptionProps) {
  const theme = useTheme();
  const style = {
    body: {
      paddingVertical: spacing[2],
      fontSize: spacing[4],
      color: theme.text[100],
      fontFamily: typography.primary.regular,
    },
    code_inline: {
      color: "#242322",
    },
    fence: {
      color: "#242322",
    },
  };

  return <Markdown style={style}>{props.children}</Markdown>;
}

export interface PropsTableProps {
  /** trios of prop name, description and default value */
  propsData: PropsData;
}

function PropsTable(props: PropsTableProps) {
  const theme = useTheme();
  const style = {
    body: {
      paddingVertical: spacing[2],
      fontSize: spacing[4],
      color: theme.text[100],
      fontFamily: typography.primary.regular,
    },
    code_inline: {
      color: "#242322",
    },
    fence: {
      color: "#242322",
    },
  };

  const table = `
  | Name | Description | Default |
  |----  | ----------- | ------- |
  ${props.propsData.reduce(
    (accu, [name, description, defaultValue]) =>
      accu + `| ${name} | ${description} | \`${defaultValue}\` |\n`,
    "",
  )}
  `;

  return <Markdown style={style}>{table}</Markdown>;
}

export interface DocsProps {
  /** The title. */
  title: string;
  /** Information about the component */
  description?: string;
  /** trios of prop name, description and default value */
  propsData: PropsData;
}

export function Docs(props: DocsProps) {
  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
        {props.description ? (
          <Description>{props.description}</Description>
        ) : null}
      </Header>
      <Title>Props</Title>
      <PropsTable propsData={props.propsData} />
    </Container>
  );
}
