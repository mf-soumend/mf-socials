import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { AuthScreenProps } from "navigation";
import { colors } from "theme";
import ForgotPasswordForm from "app/components/ForgotPasswordForm";

export const ForgetPasswordScreen: FC<AuthScreenProps<"forgetPassword">> = (
  props
) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hello</Text>
          <Text style={styles.headerDescription}>Reset your password</Text>
        </View>
        <ForgotPasswordForm {...props} />
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
  header: {
    backgroundColor: colors.freeBlue,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    width: "100%",
    paddingVertical: 60,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 40,
  },
  headerDescription: {
    fontSize: 14,
    color: colors.smokeWhite,
  },
});
