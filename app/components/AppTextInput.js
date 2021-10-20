import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../config/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../config/AppStyles";

function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={[AppStyles.appInputBackground, style]}>
      <MaterialIcons
        name={icon}
        size={20}
        color={Colors.Medium}
        style={AppStyles.appInputIcon}
      />
      <TextInput style={AppStyles.appInputText} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AppTextInput;
