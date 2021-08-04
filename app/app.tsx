import "./utils/ignore-warnings";
import React from "react";
import { ViewStyle } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { RootNavigator } from "./navigators";
import { color } from "./theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/configureStore";
import fonts from "./theme/fonts";

const { store, persistor } = configureStore();

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
};

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <SafeAreaView edges={["top"]} style={FULL}>
            <RootNavigator />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
