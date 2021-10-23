import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";
import AppPicker from "./AppPicker";
import AppText from "./AppText";

function AppFormPicker({ name, width, ...otherProps }) {
  const { setFieldValue, errors } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppPicker
        style={styles.picker}
        {...otherProps}
        onSelectItem={(item) => setFieldValue(name, item.label)}
        width={width}
      />

      {errors[name] && (
        <AppText style={styles.errorMessage}>{errors[name]}</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  errorMessage: {
    color: Colors.Danger,
    marginLeft: 15,
    fontSize: 15,
  },
  textInput: {
    marginBottom: 0,
  },
  picker: {
    marginBottom: 0,
  },
});

export default AppFormPicker;
