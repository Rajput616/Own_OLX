import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import Colors from "../Config/Colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color={Colors.PrimaryColor}
          onPress={() => alert("Hello")}
        />
        <AppButton
          title="Register"
          color={Colors.SecondaryColor}
          onPress={() => alert("Hello")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,

    alignItems: "center",
  },
  logoText: {
    top: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
