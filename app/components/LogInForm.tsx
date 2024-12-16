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
import CustomTextInput from "components/CustomTextInput";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "components/CustomButton";
import { AuthScreenProps } from "navigation";
import { colors } from "app/theme";
import { useFormik } from "formik";
import { initialLoginData, loginSchema } from "validation";
import { useDispatch } from "react-redux";
import { loginUser } from "app/store";

const LogInForm: FC<AuthScreenProps<"login">> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialLoginData,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      // TODO : Login funtionality to be implemented
      dispatch(loginUser({ name: "Soumen Das" })); // TODO : need to dispatch actual user
      Alert.alert("Logged in succesfully !!");
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
      <View style={styles.loginFormContainer}>
        <View>
          <CustomTextInput
            style={styles.input}
            name="email"
            placeholder="Email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            rightIcon={faUser}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <CustomTextInput
            style={styles.input}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            secureTextEntry={!showPassword}
            onRightIconPress={() => {
              setShowPassword((show: boolean) => !show);
            }}
            rightIcon={showPassword ? faEye : faEyeSlash}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
          <Text
            onPress={() => {
              navigation.navigate("forgetPassword", {
                email: formik.values.email,
              });
            }}
            style={styles.forgetPasswordButton}
          >
            Forget your password?
          </Text>
        </View>
        <View style={styles.loginActions}>
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}
          <CustomButton
            title="SIGN IN"
            disabled={!formik.isValid || !formik.dirty}
            onPress={formik.handleSubmit}
            buttonTextStyle={[styles.button]}
          />
          <Text
            onPress={() => {
              navigation.replace("registration");
            }}
            style={styles.link}
          >
            Don't have an account? Create
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  input: {
    padding: 10,
  },
  loginActions: {
    marginTop: 30,
    gap: 20,
  },
  button: {
    fontSize: 18,
  },
  link: {
    width: "100%",
    textAlign: "center",
    color: colors.gray,
  },
  forgetPasswordButton: {
    alignSelf: "flex-end",
    color: colors.gray,
  },
  loginFormContainer: {
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
});
