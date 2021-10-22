import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import Colors from "../config/Colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppStyles from "../config/AppStyles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: "1",
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: "2",
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: "3",
  },
  {
    backgroundColor: "#26de21",
    icon: "cards",
    label: "Games",
    value: "4",
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: "5",
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: "6",
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: "7",
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: "8",
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: "9",
  },
];

const AppPicker = ({
  icon,
  placeholder,
  style,
  width = "100%",
  onSelectItem,
  ...otherProps
}) => {
  const [selectedItem, setSelectedItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[AppStyles.appInputBackground, style, { width }]}>
          <MaterialIcons
            name={icon}
            size={20}
            color={Colors.Medium}
            style={AppStyles.appInputIcon}
          />
          {selectedItem ? (
            <AppText style={[AppStyles.appInputText, styles.label]}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={[AppStyles.appInputText, styles.placeholder]}>
              {placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={Colors.Medium}
            style={AppStyles.appInputIcon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible}>
        <AppText style={styles.title}>Select a Category</AppText>
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <PickerItem
              item={item}
              onPress={() => {
                setModalVisible(false);
                setSelectedItem(item);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    color: Colors.Black,
  },
  placeholder: {
    flex: 1,
    color: Colors.Medium,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 15,
  },
});

export default AppPicker;
