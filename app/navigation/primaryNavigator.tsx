import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { HomeScreen } from "screens";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "theme";
import { NavigationProps } from "navigation";

export type PrimaryParamList = {
  home: undefined;
};
export type PrimaryScreenProps<T extends keyof PrimaryParamList> =
  NativeStackScreenProps<PrimaryParamList, T>;

const PrimaryStack = createNativeStackNavigator<PrimaryParamList>();

export const PrimaryNavigator = (props: NavigationProps) => {
  const scheme = useColorScheme();
  const appTheme = useMemo(() => {
    const isDarkMode = scheme === "dark";
    return isDarkMode ? darkTheme : lightTheme;
  }, [darkTheme, lightTheme, scheme]);

  return (
    <PrimaryStack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: true,
        headerTintColor: appTheme.colors.primary,
        headerTitle: "",
        navigationBarColor: appTheme.colors.background,
        headerShadowVisible: false,
      }}
    >
      <PrimaryStack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </PrimaryStack.Navigator>
  );
};
