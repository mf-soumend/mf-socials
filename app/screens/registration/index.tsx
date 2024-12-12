import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { AuthScreenProps } from "navigation";

export const RegistrationScreen: FC<AuthScreenProps<"registration">> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text>Registration Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
