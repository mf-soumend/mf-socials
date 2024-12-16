import {
  Alert,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { AuthScreenProps } from "navigation";
import { colors } from "theme";
import CustomTextInput from "components/CustomTextInput";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "components/CustomButton";
import CheckBox from "components/CheckBox";
import { useFormik } from "formik";
import { initialSignupData, signupSchema } from "validation";

const RegistrationForm: FC<AuthScreenProps<"registration">> = ({
  navigation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: initialSignupData,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      // TODO : Signup funtionality to be implemented
      Alert.alert("Registered succesfully !!");
    },
  });
  useEffect(() => {
    formik.resetForm();
  }, []);
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={
        Platform.OS === "android" || Platform.OS === "ios"
          ? Keyboard.dismiss
          : () => {}
      }
    >
      <View style={styles.signupFormContainer}>
        <View>
          <CustomTextInput
            style={styles.input}
            placeholder="Name"
            name="name"
            value={formik.values.name}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
            rightIcon={faUser}
          />
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
          <CustomTextInput
            style={styles.input}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            secureTextEntry={!showPassword}
            onRightIconPress={() => {
              setShowPassword((show: boolean) => !show);
            }}
            rightIcon={showPassword ? faEye : faEyeSlash}
          />
          <CustomTextInput
            style={styles.input}
            placeholder="Confirm password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""
            }
            secureTextEntry={!showConfirmPassword}
            onRightIconPress={() => {
              setShowConfirmPassword((show: boolean) => !show);
            }}
            rightIcon={showConfirmPassword ? faEye : faEyeSlash}
          />
        </View>
        <View style={styles.signupActions}>
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}
          <CheckBox
            title="I read and agree to Terms & Conditions"
            checked={formik.values.termsAccepted}
            onPress={() => {
              formik.setFieldValue(
                "termsAccepted",
                !formik.values.termsAccepted
              );
            }}
            error={
              formik.touched.termsAccepted && formik.errors.termsAccepted
                ? formik.errors.termsAccepted
                : ""
            }
          />
          <CustomButton
            title="Sign Up"
            disabled={!formik.isValid || !formik.dirty}
            onPress={formik.handleSubmit}
            buttonTextStyle={[styles.button]}
            buttonBgStyle={[
              formik.isValid && formik.dirty ? styles.buttonBg : styles.empty,
            ]}
          />
          <Text
            onPress={() => {
              navigation.replace("login");
            }}
            style={styles.link}
          >
            Already have an account? Login
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  input: {
    padding: 10,
  },
  signupActions: {
    gap: 20,
    marginTop: 30,
  },
  button: {
    fontSize: 18,
  },
  buttonBg: {
    backgroundColor: colors.freeBlue,
  },
  link: {
    width: "100%",
    textAlign: "center",
    color: colors.gray,
  },
  signupFormContainer: {
    width: Platform.OS === "web" ? 500 : "100%",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  errorText: {
    alignSelf: "center",
    fontSize: 14,
    color: colors.electicRed,
  },
  empty: {},
});
