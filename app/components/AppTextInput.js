import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../Config/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../Config/AppStyles";

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
