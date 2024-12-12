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

const RegistrationForm: FC<AuthScreenProps<"registration">> = ({
  navigation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const onSignIn = () => {
    if (name === "" || email === "" || password === "") {
      setError("Please enter all fields !!");
    } else {
      setError("");
      setDisabled(true);
      setTimeout(() => {
        Alert.alert("Registered succesfully !!");
        setDisabled(false);
        setEmail("");
        setPassword("");
        setName("");
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
      <View style={styles.signupFormContainer}>
        <View>
          <CustomTextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            rightIcon={faUser}
          />
          <CustomTextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            rightIcon={faEnvelope}
          />
          <CustomTextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            onRightIconPress={() => {
              setShowPassword((show: boolean) => !show);
            }}
            rightIcon={showPassword ? faEye : faEyeSlash}
          />
        </View>
        <View style={styles.signupActions}>
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}
          <CustomButton
            title="Sign Up"
            disabled={disabled}
            onPress={onSignIn}
            buttonTextStyle={[styles.button]}
            buttonBgStyle={[!disabled ? styles.buttonBg : styles.empty]}
          />
          <Text
            onPress={() => {
              console.log("first");
              navigation.pop();
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
    marginBottom: 20,
    padding: 10,
  },
  signupActions: {
    gap: 20,
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
