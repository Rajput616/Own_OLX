import React, { useRef, useContext } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AppDatePicker from "../components/AppDatePicker";
import * as Yup from "yup";
import AppStyles from "../config/AppStyles";
import AuthContext from "../auth/context";
import AppFormField from "../components/AppFormField";
import AppFormButton from "../components/AppFormButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm Password")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

function SignupScreen(props) {
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const authContext = useContext(AuthContext);

  const handleSignup = (v) => {
    authContext.setUser(v);
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/logo-red.png")}
          style={[AppStyles.logo, styles.loginLogo]}
        />
        <AppForm
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            dob: "",
          }}
          onSubmit={(v) => handleSignup(v)}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="firstName"
            placeholder="First Name"
            icon="person"
            autoCapitalize="words"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
          <AppFormField
            name="lastName"
            placeholder="Last Name"
            icon="person"
            autoCapitalize="words"
            ref={lastNameRef}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <AppFormField
            name="email"
            placeholder="Email"
            icon="email"
            keyboardType="email-address"
            ref={emailRef}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <AppFormField
            name="password"
            placeholder="Password"
            icon="lock"
            secureTextEntry={true}
            ref={passwordRef}
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <AppFormField
            name="confirmPassword"
            placeholder="Confirm Password"
            icon="lock"
            secureTextEntry={true}
            ref={confirmPasswordRef}
          />
          <AppDatePicker name="dob" icon="calendar-today" placeholder="DOB" />
          <AppFormButton title="Signup" />
        </AppForm>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loginLogo: {
    marginTop: 20,
    marginBottom: 40,
    alignSelf: "center",
  },
});

export default SignupScreen;
