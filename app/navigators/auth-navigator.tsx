import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens";

export type PrimaryParamList = {
  signIn: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="signIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["signIn"];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
