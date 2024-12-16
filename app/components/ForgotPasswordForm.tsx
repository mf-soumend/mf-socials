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
import { useFormik } from "formik";
import { forgotPasswordSchema, initialForgotPasswordData } from "validation";

const ForgotPasswordForm: FC<AuthScreenProps<"forgetPassword">> = ({
  navigation,
  route,
}) => {
  const { email: forwardedMail } = route.params;
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: initialForgotPasswordData(forwardedMail),
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      // TODO : Reset password funtionality to be implemented
      Alert.alert("Reset password succesful !!");
    },
  });
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
            name="email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            rightIcon={faEnvelope}
          />
        </View>
        <View style={styles.actionsWrapper}>
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}
          <CustomButton
            title="Reset Password"
            disabled={!formik.isValid}
            onPress={formik.handleSubmit}
            buttonTextStyle={!formik.isValid ? styles.empty : styles.button}
            buttonBgStyle={!formik.isValid ? styles.empty : styles.buttonBg}
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
