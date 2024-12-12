import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AuthScreenProps } from "navigation";
import LogInForm from "components/LogInForm";
import { FC } from "react";

export const LoginScreen: FC<AuthScreenProps<"login">> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginHeaderWrapper}>
        <Text style={styles.loginHeaderTitle}>Hello</Text>
        <Text style={styles.loginHeaderDescription}>
          Sign in to your account
        </Text>
      </View>
      <LogInForm {...props} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loginHeaderWrapper: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    width: "100%",
    paddingVertical: 60,
  },
  loginHeaderTitle: {
    color: "white",
    fontSize: 40,
  },
  loginHeaderDescription: {
    fontSize: 14,
    color: "#dfdfdf",
  },
});
