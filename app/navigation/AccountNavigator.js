import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screens/AccountScreen";
import routes from "./routes";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={AccountScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
