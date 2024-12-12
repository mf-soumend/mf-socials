import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  buttonTextStyle?: StyleProp<TextStyle>;
  buttonBgStyle?: StyleProp<ViewStyle>;
  disabled: boolean;
  [otherProps: string]: any;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonTextStyle,
  onPress,
  disabled,
  buttonBgStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[disabled ? styles.disabled : styles.button, buttonTextStyle]}
      onPress={onPress}
      {...rest}
    >
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
  },
  disabled: {
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
