import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import ListingsScreen from "../screens/ListingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import NewListingButton from "./NewListingButton";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={routes.FEED_NAVIGATOR}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.EDIT_LISTING_SCREEN}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.EDIT_LISTING_SCREEN)}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
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
