import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../Config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={Colors.Medium}
        style={styles.icon}
      />
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Light,
    borderRadius: 25,
    height: 50,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    width: "100%",
    paddingRight: 30,
  },
});

export default AppTextInput;
