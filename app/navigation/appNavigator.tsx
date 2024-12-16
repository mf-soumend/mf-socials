import { useColorScheme } from "react-native";
import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { darkTheme, lightTheme } from "app/theme";
import { AuthNavigator, PrimaryNavigator } from "navigation";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "app/store";

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const scheme = useColorScheme();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const appTheme = useMemo(() => {
    const isDarkMode = scheme === "dark";
    return isDarkMode ? darkTheme : lightTheme;
  }, [darkTheme, lightTheme, scheme]);
  return (
    <NavigationContainer theme={appTheme} {...props}>
      {isAuthenticated ? (
        <PrimaryNavigator {...props} />
      ) : (
        <AuthNavigator {...props} />
      )}
    </NavigationContainer>
  );
};
