import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import Colors from "../config/Colors";

function UploadView({ progress, visible }) {
  return (
    <Modal animationType="none" visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          progress={progress}
          width={200}
          color={Colors.PrimaryColor}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadView;
