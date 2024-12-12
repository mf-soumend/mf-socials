import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

interface CheckBoxProps {
  title: string;
  onPress?: () => void;
  checkboxTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  checked: boolean;
  [otherProps: string]: any;
}
const CheckBox: FC<CheckBoxProps> = ({
  title,
  onPress,
  checkboxTextStyle,
  disabled = false,
  checked,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled}
      onPress={onPress}
      {...rest}
    >
      <FontAwesomeIcon icon={checked ? faSquareCheck : faSquare} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
