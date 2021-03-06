import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  WelcomeScreen,
  SignInWithEmailScreen,
  SignUpWithEmailScreen,
} from "../screens";

export type PrimaryParamList = {
  Welcome: undefined;
  SignInWithEmail: undefined;
  SignUpWithEmail: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignInWithEmail" component={SignInWithEmailScreen} />
      <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmailScreen} />
    </Stack.Navigator>
  );
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
const exitRoutes = ["signIn"];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
