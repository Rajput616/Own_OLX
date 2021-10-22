import React from "react";
import {
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";

function PickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: item.backgroundColor },
          ]}
        >
          <MaterialCommunityIcons
            name={item.icon}
            size={35}
            color={Colors.White}
          />
        </View>
        <AppText style={styles.itemLabel}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "33%",
    paddingVertical: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  itemLabel: {
    marginTop: 5,
  },
});

export default PickerItem;
