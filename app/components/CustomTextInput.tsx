import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { colors } from "app/theme";

interface CustomTextInputProps {
  name: string;
  value: string;
  placeholder?: string;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  disabled?: boolean;
  error?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  style?: StyleProp<ViewStyle>;
  [otherProps: string]: any;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  name,
  value,
  handleChange,
  handleBlur,
  placeholder,
  leftIcon,
  rightIcon,
  disabled,
  onLeftIconPress,
  onRightIconPress,
  error = "",
  style,
  ...rest
}) => {
  return (
    <View style={styles.textContainer}>
      <View style={[styles.container, style]}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftIconPress}>
            <FontAwesomeIcon icon={leftIcon} size={24} color="#999" />
          </TouchableOpacity>
        )}

        <TextInput
          style={styles.input}
          value={value}
          editable={!disabled}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          placeholder={placeholder}
          {...rest}
        />

        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <FontAwesomeIcon icon={rightIcon} size={16} color="#999" />
          </TouchableOpacity>
        )}
      </View>
      {error !== "" && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.cultured,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 4,
  },
  errorText: {
    fontSize: 14,
    color: colors.electicRed,
    marginTop: 10,
  },
});
