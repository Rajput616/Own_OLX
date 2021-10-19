import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppStyles from "../Config/AppStyles";
import Colors from "../Config/Colors";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen(props) {
  const handleLogin = (v) => {
    console.log("Email = " + v.email);
    console.log("Password = " + v.password);
  };

  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={[AppStyles.logo, styles.loginLogo]}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, errors }) => (
          <>
            <AppTextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              icon="email"
              keyboardType="email-address"
            />
            <AppText>{errors.email}</AppText>
            <AppTextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              icon="lock"
              secureTextEntry={true}
            />
            <AppText>{errors.password}</AppText>
            <AppButton
              title="Login"
              color={Colors.PrimaryColor}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>

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
