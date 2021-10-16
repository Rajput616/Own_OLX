import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./app/components/Card";
import WelcomeScreen from "./app/Screens/WelcomeScreen";

export default function App() {
  // return <WelcomeScreen />;
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket"
        price="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
});
