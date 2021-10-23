import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  const handlePress = async () => {
    if (imageUri) {
      Alert.alert("Delete", "Are you sure you want to delete?", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(imageUri);
          },
        },
        { text: "No" },
      ]);
    } else {
      const imageResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!imageResult.cancelled) {
        onChangeImage(imageResult.uri);
      }
    }
  };

  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert("Media Library permission is required");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  //componentDidMount

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri, width: "100%", height: "100%" }} />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={24}
            color={Colors.Medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: Colors.Light,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginRight: 10,
  },
});

export default ImageInput;
