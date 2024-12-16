import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { colors } from "theme";

interface CheckBoxProps {
  title: string;
  onPress?: () => void;
  checkboxTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  error?: string;
  checked: boolean;
  [otherProps: string]: any;
}
const CheckBox: FC<CheckBoxProps> = ({
  title,
  onPress,
  checkboxTextStyle,
  disabled = false,
  error = "",
  checked,
  ...rest
}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        disabled={disabled}
        onPress={onPress}
        {...rest}
      >
        <FontAwesomeIcon icon={checked ? faSquareCheck : faSquare} />
        <Text>{title}</Text>
      </TouchableOpacity>
      {error !== "" && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  errorText: {
    fontSize: 14,
    color: colors.electicRed,
    marginTop: 10,
  },
});
