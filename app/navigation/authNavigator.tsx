import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { LoginScreen, RegistrationScreen, ForgetPasswordScreen } from "screens";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "theme";
import { NavigationProps } from "navigation";

export type AuthParamList = {
  login: undefined;
  registration: undefined;
  forgetPassword: { email: string };
};
export type AuthScreenProps<T extends keyof AuthParamList> =
  NativeStackScreenProps<AuthParamList, T>;

const AuthStack = createNativeStackNavigator<AuthParamList>();

export const AuthNavigator = (props: NavigationProps) => {
  const scheme = useColorScheme();
  const appTheme = useMemo(() => {
    const isDarkMode = scheme === "dark";
    return isDarkMode ? darkTheme : lightTheme;
  }, [darkTheme, lightTheme, scheme]);

  return (
    <AuthStack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: true,
        headerTintColor: appTheme.colors.primary,
        headerTitle: "",
        navigationBarColor: appTheme.colors.background,
        headerShadowVisible: false,
      }}
    >
      <AuthStack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="registration"
        component={RegistrationScreen}
        options={{
          title: "Create your account",
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="forgetPassword"
        options={{
          title: "Forgot password",
          headerShown: false,
        }}
        component={ForgetPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};
