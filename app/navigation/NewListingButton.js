import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={Colors.White}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 35,
    bottom: 25,
    borderColor: Colors.White,
    borderWidth: 5,
  },
});

export default NewListingButton;
