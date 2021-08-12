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
import ReactiveThemeProvider from "../app/components/reactive-theme-provider/reactive-theme-provider";
import { darkTheme, lightTheme } from "../app/theme/themes";
import styled from "@emotion/native";

const { store, persistor } = configureStore();

const StyledSafeAreaView = styled(SafeAreaView)(props => ({
  flex: 1,
  backgroundColor: props.theme.background,
}));

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) return null;

  return (
    <ReactiveThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StyledSafeAreaView edges={["top"]}>
              <RootNavigator />
            </StyledSafeAreaView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ReactiveThemeProvider>
  );
}

export default App;
