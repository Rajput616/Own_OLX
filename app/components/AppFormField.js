import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";

const AppFormField = React.forwardRef(({ name, ...otherProps }, ref) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppTextInput
        style={styles.textInput}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        ref={ref}
      />
      {touched[name] && errors[name] && (
        <AppText style={styles.errorMessage}>{errors[name]}</AppText>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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
});

export default AppFormField;
