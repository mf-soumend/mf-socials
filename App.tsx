import * as React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { AppNavigator } from "navigation";
import { persistor } from "store";
import store from "app/store/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </PersistGate>
    </SafeAreaProvider>
  );
}
