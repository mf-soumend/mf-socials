import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { AuthScreenProps } from "navigation";

export const ForgetPasswordScreen: FC<AuthScreenProps<"forgetPassword">> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Forget Password Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
