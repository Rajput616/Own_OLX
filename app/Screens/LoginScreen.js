import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppStyles from "../Config/AppStyles";
import Colors from "../Config/Colors";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={[AppStyles.logo, styles.loginLogo]}
      />
      <AppTextInput
        placeholder="Email"
        icon="email"
        keyboardType="email-address"
      />
      <AppTextInput placeholder="Password" icon="lock" secureTextEntry={true} />
      <AppButton title="Login" color={Colors.PrimaryColor} />
      <TouchableOpacity onPress={() => console.log("Register")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  loginLogo: {
    marginTop: 60,
    marginBottom: 60,
  },
});

export default LoginScreen;
