import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import AppDatePicker from "../components/AppDatePicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppStyles from "../Config/AppStyles";
import Colors from "../Config/Colors";

function SignupScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={[AppStyles.logo, styles.loginLogo]}
      />
      <AppTextInput
        placeholder="First Name"
        icon="person"
        autoCapitalize="words"
      />
      <AppTextInput
        placeholder="Last Name"
        icon="person"
        autoCapitalize="words"
      />
      <AppTextInput
        placeholder="Email"
        icon="email"
        keyboardType="email-address"
      />
      <AppTextInput placeholder="Password" icon="lock" secureTextEntry={true} />
      <AppTextInput
        placeholder="Confirm Password"
        icon="lock"
        secureTextEntry={true}
      />

      <AppDatePicker icon="calendar-today" placeholder="DOB" />

      <AppButton title="Signup" color={Colors.PrimaryColor} />
      <TouchableOpacity onPress={() => console.log("Register")}>
        <Text>Go Back</Text>
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

export default SignupScreen;
