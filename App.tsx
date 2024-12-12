import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthNavigator } from "./app/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthNavigator />
    </SafeAreaProvider>
  );
}
