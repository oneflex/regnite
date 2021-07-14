/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./utils/ignore-warnings";
import React, { useEffect, useRef } from "react";
import { SafeAreaView, ViewStyle } from "react-native";
import { NavigationContainerRef } from "@react-navigation/native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { initFonts } from "./theme/fonts"; // expo
import * as storage from "./utils/storage";
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from "./navigators";
import { enableScreens } from "react-native-screens";
import { color } from "./theme";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";

/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>(null);

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      await initFonts(); // expo
    })();
  }, []);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  // if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView style={FULL}>
          <RootNavigator
            ref={navigationRef}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
};

export default App;
