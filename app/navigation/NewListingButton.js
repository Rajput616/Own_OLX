import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle"
        color={Colors.White}
        size={40}
      />
    </View>
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
