import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="delete" color="white" size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PrimaryColor,
    width: 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
