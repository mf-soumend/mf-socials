import {
  StyleProp,
  StyleSheet,
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
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  style?: StyleProp<ViewStyle>;
  [otherProps: string]: any;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && (
        <TouchableOpacity onPress={onLeftIconPress}>
          <FontAwesomeIcon icon={leftIcon} size={24} color="#999" />
        </TouchableOpacity>
      )}

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...rest}
      />

      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <FontAwesomeIcon icon={rightIcon} size={16} color="#999" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
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
});
