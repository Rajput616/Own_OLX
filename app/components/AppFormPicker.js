import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";
import AppPicker from "./AppPicker";
import AppText from "./AppText";

function AppFormPicker({ name, width, ...otherProps }) {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();

  return (
    <View style={styles.container}>
      <AppPicker
        style={styles.picker}
        width={width}
        {...otherProps}
        onSelectItem={(item) => {
          setFieldTouched(name);
          setFieldValue(name, item);
        }}
        selectedItem={values[name]}
      />

      {errors[name] && touched[name] && (
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
