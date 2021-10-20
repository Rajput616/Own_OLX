import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";

function ListItemSeparator({ marginStart, marginEnd }) {
  return (
    <View
      style={[
        styles.container,
        { marginLeft: marginStart, marginRight: marginEnd },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.Light,
  },
});

export default ListItemSeparator;
