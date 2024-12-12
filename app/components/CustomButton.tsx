import { colors } from "theme";
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
      style={[disabled ? styles.disabled : styles.button, buttonBgStyle]}
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
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
  },
});
