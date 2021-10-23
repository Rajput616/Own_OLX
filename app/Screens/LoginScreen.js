import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppStyles from "../config/AppStyles";
import * as Yup from "yup";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";
import AppFormField from "../components/AppFormField";
import AppFormButton from "../components/AppFormButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const handleLogin = (v) => {
    authContext.setUser(v);
  };

  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={[AppStyles.logo, styles.loginLogo]}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          secureTextEntry={true}
        />
        <AppFormButton title="Login" />
      </AppForm>

      <TouchableOpacity
        onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
      >
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  loginLogo: {
    marginTop: 60,
    marginBottom: 60,
    alignSelf: "center",
  },
  register: {
    alignSelf: "center",
  },
});

export default LoginScreen;
