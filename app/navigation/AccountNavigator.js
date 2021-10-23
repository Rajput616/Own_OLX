import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screens/AccountScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />
      {/* <Stack.Screen
        name={routes.LISTING_DETAIL_SCREEN}
        component={ListingDetailScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default AccountNavigator;
