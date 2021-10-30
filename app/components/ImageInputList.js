import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ onChange, imageUris }) {
  const scrollView = useRef();

  const handleImageAddition = (uri) => {
    const newImageUris = [...imageUris, uri];
    onChange(newImageUris);
  };

  const handleImageDeletion = (uri) => {
    const newImageUris = imageUris.filter((i) => i != uri);
    onChange(newImageUris);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput imageUri={uri} onChangeImage={handleImageDeletion} />
          ))}
          <ImageInput onChangeImage={handleImageAddition} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
});

export default ImageInputList;
