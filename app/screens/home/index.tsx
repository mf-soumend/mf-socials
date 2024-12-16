import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { PrimaryScreenProps } from "app/navigation/primaryNavigator";
import { logoutUser, selectUser } from "app/store";
import { colors } from "app/theme";
import { FC } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const HomeScreen: FC<PrimaryScreenProps<"home">> = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Hello</Text>
          <Text style={styles.headerDescription}>
            Welcome, {user.name ?? "User"}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
          <FontAwesomeIcon icon={faSignOut} color={colors.white} size={16} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    minHeight: "100%",
    alignItems: "center",
  },
  headerWrapper: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    width: "100%",
    paddingVertical: 60,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 40,
  },
  headerDescription: {
    fontSize: 14,
    color: colors.smokeWhite,
  },
  button: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.danger,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontWeight: 500,
    fontSize: 16,
    color: colors.white,
  },
});
