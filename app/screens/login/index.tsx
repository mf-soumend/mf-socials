import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AuthScreenProps } from "navigation";
import LogInForm from "components/LogInForm";
import { FC } from "react";
import { colors } from "theme";

export const LoginScreen: FC<AuthScreenProps<"login">> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.loginHeaderWrapper}>
          <Text style={styles.loginHeaderTitle}>Hello</Text>
          <Text style={styles.loginHeaderDescription}>
            Sign in to your account
          </Text>
        </View>
        <LogInForm {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    minHeight: "100%",
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
    color: colors.white,
    fontSize: 40,
  },
  loginHeaderDescription: {
    fontSize: 14,
    color: colors.smokeWhite,
  },
});
