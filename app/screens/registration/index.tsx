import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { AuthScreenProps } from "navigation";
import RegistrationForm from "components/RegistrationForm";
import { colors } from "theme";

export const RegistrationScreen: FC<AuthScreenProps<"registration">> = (
  props
) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.registrationHeader}>
          <Text style={styles.headerTitle}>Hello</Text>
          <Text style={styles.headerDescription}>Create your account</Text>
        </View>
        <RegistrationForm {...props} />
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
  registrationHeader: {
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
