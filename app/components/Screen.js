import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

function Screen({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Screen;
