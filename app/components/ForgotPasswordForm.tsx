import {
  Alert,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { AuthScreenProps } from "app/navigation";
import CustomTextInput from "./CustomTextInput";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "./CustomButton";
import { colors } from "app/theme";

const ForgotPasswordForm: FC<AuthScreenProps<"forgetPassword">> = ({
  navigation,
  route,
}) => {
  const { email: forwardedMail } = route.params;
  const [email, setEmail] = useState(forwardedMail ? forwardedMail : "");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const onResetPassword = () => {
    if (email === "") {
      setError("Please enter Email !!");
    } else {
      setError("");
      setDisabled(true);
      setTimeout(() => {
        Alert.alert("Logged in succesfully !!");
        setDisabled(false);
        setEmail("");
      }, 2000);
    }
  };
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={
        Platform.OS === "android" || Platform.OS === "ios"
          ? Keyboard.dismiss
          : () => {}
      }
    >
      <View style={styles.formWrapper}>
        <View>
          <CustomTextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            disabled={disabled}
            onChangeText={setEmail}
            rightIcon={faEnvelope}
          />
        </View>
        <View style={styles.actionsWrapper}>
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}
          <CustomButton
            title="Reset Password"
            disabled={disabled}
            onPress={onResetPassword}
            buttonTextStyle={disabled ? styles.empty : styles.button}
            buttonBgStyle={disabled ? styles.empty : styles.buttonBg}
          />
          <Text
            onPress={() => {
              navigation.pop();
            }}
            style={styles.link}
          >
            Click here to login
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  formWrapper: {
    width: Platform.OS === "web" ? 500 : "100%",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  input: {
    marginBottom: 20,
    padding: 10,
  },
  actionsWrapper: {
    marginTop: 30,
    gap: 20,
  },
  errorText: {
    alignSelf: "center",
    fontSize: 14,
    color: colors.electicRed,
  },
  button: {
    color: colors.danger,
  },
  buttonBg: {
    backgroundColor: colors.transparent,
    borderColor: colors.danger,
    borderWidth: 2,
  },
  link: {
    width: "100%",
    textAlign: "center",
    color: colors.gray,
  },
  empty: {},
});
