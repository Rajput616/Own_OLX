import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import ListingsScreen from "../screens/ListingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.LISTINGS_SCREEN}
        component={ListingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.EDIT_LISTING_SCREEN}
        component={ListingsScreen}
        options={{
          tabBarButton: () => <NewListingButton />,
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT_SCREEN}
        component={ListingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
