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

const LogInForm: FC<AuthScreenProps<"login">> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const onSignIn = () => {
    if (email === "" || password === "") {
      setError("Please enter all fields !!");
    } else {
      setError("");
      setDisabled(true);
      setTimeout(() => {
        Alert.alert("Logged in succesfully !!");
        setDisabled(false);
        setEmail("");
        setPassword("");
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
      <View style={styles.loginFormContainer}>
        <View>
          <CustomTextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            disabled={disabled}
            onChangeText={setEmail}
            rightIcon={faUser}
          />
          <CustomTextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            disabled={disabled}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            onRightIconPress={() => {
              setShowPassword((show: boolean) => !show);
            }}
            rightIcon={showPassword ? faEye : faEyeSlash}
          />
          <Text
            onPress={() => {
              navigation.navigate("forgetPassword", { email });
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
            disabled={disabled}
            onPress={onSignIn}
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
    marginBottom: 20,
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
