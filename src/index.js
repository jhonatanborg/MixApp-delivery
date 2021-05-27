import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./contexts/index";
import Routes from "./routes";

export default function App() {
  AsyncStorage.clear();
  let [fontsLoaded] = useFonts({
    Jost_400Regular: require("./fonts/Jost_400Regular.ttf"),
    Jost_600SemiBold: require("./fonts/Jost_600SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
registerRootComponent(App);
