import React, { useState } from "react";
import { useFormikContext } from "formik";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Colors from "../config/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../config/AppStyles";
import DateTimePicker from "@react-native-community/datetimepicker";

function AppDatePicker({ name, icon, style, ...otherProps }) {
  const { setFieldValue } = useFormikContext();

  var [show, setShow] = useState(false);
  var [date, setDate] = useState("");

  const handlePress = () => {
    showDatePicker(true);
  };

  const showDatePicker = (s) => {
    if (Platform.OS === "ios") {
      setShow(true);
    } else {
      setShow(s);
    }
  };

  const onChange = (event, selectedDate) => {
    var date =
      selectedDate.getDate() +
      " - " +
      (selectedDate.getMonth() + 1) +
      " - " +
      selectedDate.getFullYear();
    setDate(date);
    showDatePicker(false);
    setFieldValue(name, date);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[AppStyles.appInputBackground, style]}>
          <MaterialIcons
            name={icon}
            size={20}
            color={Colors.Medium}
            style={AppStyles.appInputIcon}
          />
          <TextInput
            value={date}
            editable={false}
            style={AppStyles.appInputText}
            {...otherProps}
          />
        </View>
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker
          value={new Date()}
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppDatePicker;
