import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";

function Icon({
  name,
  size = 40,
  backgroundColor = Colors.Medium,
  IconColor = Colors.White,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={IconColor} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Icon;
