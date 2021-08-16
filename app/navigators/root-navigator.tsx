import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainNavigator } from "./main-navigator";
import { AuthNavigator } from "./auth-navigator";
import { connect } from "react-redux";

export type RootParamList = {
  mainStack: undefined;
  authStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
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
  isSignedIn: state.auth.user,
});

const ConnectedRootStack = connect(mapStateToProps)(RootStack);

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
