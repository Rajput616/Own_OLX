import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../config/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../config/AppStyles";

const AppTextInput = React.forwardRef(
  ({ icon, style, width, ...otherProps }, ref) => {
    return (
      <View style={[AppStyles.appInputBackground, style, { width }]}>
        <MaterialIcons
          name={icon}
          size={20}
          color={Colors.Medium}
          style={AppStyles.appInputIcon}
        />
        <TextInput
          placeholderTextColor={Colors.Medium}
          style={AppStyles.appInputText}
          {...otherProps}
          ref={ref}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({});

export default AppTextInput;
