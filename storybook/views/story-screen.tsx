import * as React from "react";
import { Platform } from "react-native";
import styled from "@emotion/native";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.KeyboardAvoidingView(props => ({
  backgroundColor: props.theme.background[100],
  flex: 1,
}));

export interface StoryScreenProps {
  children?: React.ReactNode;
}

const behavior = Platform.OS === "ios" ? "padding" : undefined;

export const StoryScreen = (props: StoryScreenProps) => (
  <Container behavior={behavior} keyboardVerticalOffset={50}>
    <ScrollView>{props.children}</ScrollView>
  </Container>
);
