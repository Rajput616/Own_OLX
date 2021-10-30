import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import Colors from "../config/Colors";

function UploadView({ onDone, progress = 0, visible = false }) {
  return (
    <Modal animationType="none" visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={Colors.PrimaryColor}
          />
        ) : (
          <AnimatedLottieView
            source={require("../assets/animations/done.json")}
            autoPlay
            loop={false}
            style={styles.doneAnimation}
            onAnimationFinish={onDone}
          />
        )}
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
  doneAnimation: {
    width: 200,
  },
});

export default UploadView;
