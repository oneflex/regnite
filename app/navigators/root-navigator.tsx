import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainNavigator } from "./main-navigator";
import { AuthNavigator } from "./auth-navigator";
import { color } from "../theme";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";

export type RootParamList = {
  mainStack: undefined;
  authStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: color.background },
        headerShown: false,
      }}
    >
      {props.isSignedIn ? (
        <Stack.Screen name="mainStack" component={MainNavigator} />
      ) : (
        <Stack.Screen name="authStack" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  isSignedIn: state.auth.uid,
});

const ConnectedRootStack = connect(mapStateToProps)(RootStack);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("signed out");
  } else {
    console.log("signed out");
  }
});

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <ConnectedRootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = "RootNavigator";
