import "./utils/ignore-warnings";
import React, { useRef } from "react";
import { ViewStyle } from "react-native";
import { NavigationContainerRef } from "@react-navigation/native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";
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
import "./firebase/firebase";
import fonts from "./theme/fonts";

const store = configureStore();

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
};

function App() {
  const navigationRef = useRef<NavigationContainerRef>(null);

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView edges={["top"]} style={FULL}>
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

export default App;
