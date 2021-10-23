import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../config/Colors";

function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
