import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppStyles from "../config/AppStyles";
import Colors from "../config/Colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={AppStyles.logo}
        />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color={Colors.PrimaryColor}
          onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
        />
        <AppButton
          title="Register"
          color={Colors.SecondaryColor}
          onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
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
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
