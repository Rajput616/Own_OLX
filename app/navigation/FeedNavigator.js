import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListingScreen from "../screens/ListingScreen";
import routes from "./routes";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const Stack = createNativeStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LISTINGS_SCREEN} component={ListingScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAIL_SCREEN}
        component={ListingDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
