import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";

const AppFormField = React.forwardRef(({ name, width, ...otherProps }, ref) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();

  return (
    <View style={styles.container}>
      <AppTextInput
        style={styles.textInput}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        ref={ref}
        width={width}
      />
      {touched[name] && errors[name] && (
        <AppText style={styles.errorMessage}>{errors[name]}</AppText>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  errorMessage: {
    color: Colors.Danger,
    marginLeft: 15,
    fontSize: 15,
  },
  textInput: {
    marginBottom: 0,
  },
});

export default AppFormField;
