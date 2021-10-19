import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../Config/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../Config/AppStyles";
import DateTimePicker from "@react-native-community/datetimepicker";

function AppDatePicker({ icon, style, ...otherProps }) {
  var [show, setShow] = useState(false);
  var [date, setDate] = useState("");

  const handlePress = () => {
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    setDate(
      selectedDate.getDate() +
        " - " +
        (selectedDate.getMonth() + 1) +
        " - " +
        selectedDate.getFullYear()
    );
    setShow(false);
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
  container: {
    paddingHorizontal: 15,
  },
});

export default AppDatePicker;
